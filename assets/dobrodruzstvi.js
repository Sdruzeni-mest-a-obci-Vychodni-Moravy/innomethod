(function () {
  var NS = 'http://www.w3.org/2000/svg';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var touchOnly = window.matchMedia('(hover: none)');

  function svgEl(name, attrs, parent) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  /* ---------- 1. Trail beside "Jak to funguje?", drawn as the reader scrolls ---------- */

  var trail = document.querySelector('[data-trail]');
  if (trail) {
    var svg = trail.querySelector('.trail-svg');
    var steps = Array.prototype.slice.call(trail.querySelectorAll('.how-steps > li'));
    var geo = null;
    var frame = 0;

    var build = function () {
      var w = Math.round(svg.getBoundingClientRect().width);
      var h = trail.offsetHeight;
      if (!w || !h) return;
      svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
      while (svg.firstChild) svg.removeChild(svg.firstChild);

      var cx = w / 2;
      var sway = Math.max(10, w * 0.34);
      var top = trail.getBoundingClientRect().top;
      var pts = [{ x: cx, y: 12 }];
      steps.forEach(function (li) {
        var r = li.getBoundingClientRect();
        pts.push({ x: cx, y: r.top - top + Math.min(32, r.height / 2) });
      });
      pts.push({ x: cx, y: h - 6 });

      // Serpentine: each segment bows to the opposite side of the previous one.
      var d = 'M' + pts[0].x + ' ' + pts[0].y;
      var upTo = [d];
      for (var i = 1; i < pts.length; i++) {
        var a = pts[i - 1], b = pts[i], dy = b.y - a.y, s = (i % 2 ? 1 : -1) * sway;
        d += ' C' + (a.x + s) + ' ' + (a.y + dy * 0.32) + ' ' + (b.x + s) + ' ' + (b.y - dy * 0.32) + ' ' + b.x + ' ' + b.y;
        upTo.push(d);
      }

      var defs = svgEl('defs', {}, svg);
      var mask = svgEl('mask', { id: 'trail-mask', maskUnits: 'userSpaceOnUse', x: -w, y: -40, width: w * 3, height: h + 80 }, defs);
      var reveal = svgEl('path', { d: d, 'class': 'trail-reveal' }, mask);
      svgEl('path', { d: d, 'class': 'trail-ghost' }, svg);
      svgEl('path', { d: d, 'class': 'trail-ink', mask: 'url(#trail-mask)' }, svg);

      var total = reveal.getTotalLength();
      reveal.style.strokeDasharray = total + ' ' + total;

      var probe = svgEl('path', {}, svg);
      var lens = upTo.map(function (part, k) {
        if (k === 0) return 0;
        probe.setAttribute('d', part);
        return probe.getTotalLength();
      });
      svg.removeChild(probe);

      var big = w > 80;
      var start = svgEl('g', { 'class': 'trail-mark' }, svg);
      svgEl('circle', { cx: pts[0].x, cy: pts[0].y, r: big ? 7 : 5 }, start);
      svgEl('circle', { cx: pts[0].x, cy: pts[0].y, r: 2, 'class': 'flag' }, start);

      var nodes = steps.map(function (li, k) {
        var p = pts[k + 1];
        var g = svgEl('g', { 'class': 'trail-node' }, svg);
        svgEl('circle', { 'class': 'ring', cx: p.x, cy: p.y, r: big ? 13 : 10 }, g);
        svgEl('circle', { 'class': 'core', cx: p.x, cy: p.y, r: big ? 5 : 4 }, g);
        return { len: lens[k + 1], g: g, li: li };
      });

      var end = pts[pts.length - 1];
      var flag = svgEl('g', { 'class': 'trail-mark' }, svg);
      svgEl('line', { x1: end.x, y1: end.y, x2: end.x, y2: end.y - 26 }, flag);
      svgEl('path', { 'class': 'flag', d: 'M' + end.x + ' ' + (end.y - 26) + ' l17 5.5 -17 6 z' }, flag);

      var halo = svgEl('circle', { 'class': 'trail-tip-halo', r: big ? 10 : 8 }, svg);
      var tip = svgEl('circle', { 'class': 'trail-tip', r: big ? 4.5 : 3.5 }, svg);

      var samples = [];
      for (var L = 0; L < total; L += 6) samples.push({ len: L, y: reveal.getPointAtLength(L).y });
      samples.push({ len: total, y: reveal.getPointAtLength(total).y });

      geo = { reveal: reveal, total: total, samples: samples, nodes: nodes, start: start, flag: flag, tip: tip, halo: halo };
      update();
    };

    var lengthAtY = function (y) {
      var s = geo.samples;
      if (y <= s[0].y) return 0;
      for (var i = 1; i < s.length; i++) {
        if (s[i].y >= y) {
          var a = s[i - 1], b = s[i];
          return a.len + (b.len - a.len) * ((y - a.y) / ((b.y - a.y) || 1));
        }
      }
      return geo.total;
    };

    var update = function () {
      frame = 0;
      if (!geo) return;
      var len = geo.total;
      if (!reduceMotion.matches) {
        // The drawing tip follows a reading line a little below the middle of the screen.
        len = lengthAtY(window.innerHeight * 0.62 - trail.getBoundingClientRect().top);
      }
      geo.reveal.style.strokeDashoffset = String(geo.total - len);
      geo.nodes.forEach(function (n) {
        var on = len >= n.len - 1;
        n.g.classList.toggle('is-reached', on);
        n.li.classList.toggle('is-reached', on);
      });
      geo.start.classList.toggle('is-reached', len > 0);
      geo.flag.classList.toggle('is-reached', len >= geo.total - 1);
      var moving = len > 0 && len < geo.total - 1;
      var p = geo.reveal.getPointAtLength(len);
      [geo.tip, geo.halo].forEach(function (c) {
        c.setAttribute('cx', p.x);
        c.setAttribute('cy', p.y);
        c.style.display = moving ? '' : 'none';
      });
    };

    var schedule = function () { if (!frame) frame = requestAnimationFrame(update); };
    var rebuildFrame = 0;
    var rebuild = function () {
      if (rebuildFrame) cancelAnimationFrame(rebuildFrame);
      rebuildFrame = requestAnimationFrame(function () { rebuildFrame = 0; build(); });
    };

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', rebuild);
    window.addEventListener('load', rebuild);
    document.addEventListener('innomethod:langchange', rebuild);
    if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', update);
    if ('ResizeObserver' in window) new ResizeObserver(rebuild).observe(trail);
    build();
  }

  /* ---------- 2. Route cards: the route line draws on hover, or on tap before leaving ---------- */

  var cards = Array.prototype.slice.call(document.querySelectorAll('.route-card'));

  cards.forEach(function (card) {
    var ink = card.querySelector('.route-line-ink');
    if (!ink) return;

    card.addEventListener('click', function (e) {
      if (!touchOnly.matches) return;
      var isLink = card.tagName === 'A';
      if (isLink && (reduceMotion.matches || card.dataset.drawn === '1')) return;

      e.preventDefault();
      cards.forEach(function (c) { if (c !== card) { c.classList.remove('is-drawing'); delete c.dataset.drawn; } });
      if (card.classList.contains('is-drawing')) return;
      card.classList.add('is-drawing');

      var done = false;
      var finish = function () {
        if (done) return;
        done = true;
        card.dataset.drawn = '1';
        if (isLink) window.location.href = card.href;
      };
      ink.addEventListener('transitionend', function onEnd(ev) {
        if (ev.propertyName !== 'clip-path') return;
        ink.removeEventListener('transitionend', onEnd);
        finish();
      });
      setTimeout(finish, reduceMotion.matches ? 0 : 1000);
    });
  });

  // Coming back via the browser's Back button should show the cards un-drawn again.
  window.addEventListener('pageshow', function () {
    cards.forEach(function (c) { c.classList.remove('is-drawing'); delete c.dataset.drawn; });
  });
})();
