(function () {
  var NS = 'http://www.w3.org/2000/svg';
  // Presentation attributes keep the trail looking right even if the stylesheet is stale or missing.
  var MARK = { 'class': 'trail-mark', fill: 'none', stroke: '#b9c7b2', 'stroke-width': 2.2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

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
      var reveal = svgEl('path', { d: d, 'class': 'trail-reveal', fill: 'none', stroke: '#fff', 'stroke-width': 14, 'stroke-linecap': 'round' }, mask);
      svgEl('path', { d: d, 'class': 'trail-ghost', fill: 'none', stroke: '#cfc6ae', 'stroke-width': 3.2, 'stroke-linecap': 'round', 'stroke-dasharray': '7 8' }, svg);
      svgEl('path', { d: d, 'class': 'trail-ink', mask: 'url(#trail-mask)', fill: 'none', stroke: '#3f5c40', 'stroke-width': 3.2, 'stroke-linecap': 'round', 'stroke-dasharray': '7 8' }, svg);

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
      var start = svgEl('g', MARK, svg);
      svgEl('circle', { cx: pts[0].x, cy: pts[0].y, r: big ? 7 : 5 }, start);
      svgEl('circle', { cx: pts[0].x, cy: pts[0].y, r: 2, 'class': 'flag', fill: '#b9c7b2', stroke: 'none' }, start);

      var nodes = steps.map(function (li, k) {
        var p = pts[k + 1];
        var g = svgEl('g', { 'class': 'trail-node' }, svg);
        svgEl('circle', { 'class': 'ring', cx: p.x, cy: p.y, r: big ? 13 : 10, fill: '#f6f3ea', stroke: '#b9c7b2', 'stroke-width': 2.5 }, g);
        var num = svgEl('text', {
          'class': 'num', x: p.x, y: p.y, fill: '#6d8f65', 'text-anchor': 'middle', 'dominant-baseline': 'central',
          'font-size': big ? 13 : 11, 'font-weight': 700, 'font-family': "'Segoe UI', Roboto, Arial, sans-serif"
        }, g);
        num.textContent = String(k + 1);
        return { len: lens[k + 1], g: g, li: li };
      });

      var end = pts[pts.length - 1];
      var flag = svgEl('g', MARK, svg);
      svgEl('line', { x1: end.x, y1: end.y, x2: end.x, y2: end.y - 26 }, flag);
      svgEl('path', { 'class': 'flag', fill: '#b9c7b2', stroke: 'none', d: 'M' + end.x + ' ' + (end.y - 26) + ' l17 5.5 -17 6 z' }, flag);

      var halo = svgEl('circle', { 'class': 'trail-tip-halo', r: big ? 10 : 8, fill: '#e8d24f', opacity: 0.55 }, svg);
      var tip = svgEl('circle', { 'class': 'trail-tip', r: big ? 4.5 : 3.5, fill: '#3f5c40' }, svg);

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

  /* ---------- 2. Route cards: the route line draws left to right once the card scrolls into view ---------- */

  var drawCards = Array.prototype.slice.call(document.querySelectorAll('.route-card'))
    .filter(function (c) { return c.querySelector('.route-line-ink'); });
  var drawObserver = null;

  var observeCards = function () {
    if (!('IntersectionObserver' in window)) {
      drawCards.forEach(function (c) { c.classList.add('is-drawing'); });
      return;
    }
    if (drawObserver) drawObserver.disconnect();
    drawObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-drawing');
        drawObserver.unobserve(entry.target);
      });
    }, { threshold: 0.6 });
    drawCards.forEach(function (c) { drawObserver.observe(c); });
  };
  observeCards();

  // Coming back via the browser's Back button: draw the lines again as the cards come into view.
  window.addEventListener('pageshow', function (e) {
    if (!e.persisted) return;
    drawCards.forEach(function (c) { c.classList.remove('is-drawing'); });
    observeCards();
  });
})();
