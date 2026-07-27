document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.site-nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  document.querySelectorAll('svg.eu-flag').forEach(function (svg) {
    var blue = svg.getAttribute('data-color') === 'blue';
    var fill = blue ? '#003399' : 'none';
    var stroke = blue ? 'none' : '#111';
    var starColor = blue ? '#ffcc00' : '#111';
    var cx = 30, cy = 20, r = 11;
    var html = '<rect x="1" y="1" width="58" height="38" rx="2" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + (blue ? 0 : 2) + '"/>';
    for (var i = 0; i < 12; i++) {
      var a = (Math.PI * 2 * i / 12) - Math.PI / 2;
      var x = cx + r * Math.cos(a);
      var y = cy + r * Math.sin(a);
      html += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="1.7" fill="' + starColor + '"/>';
    }
    svg.innerHTML = html;
  });
});
