(function () {
  // A speech bubble becomes a play button only once its recording actually loads,
  // so visitors never see the "click to listen" cue without a sound behind it.
  function setup(scene) {
    var audio = scene.querySelector('audio');
    var bubble = scene.querySelector('.karpik-bubble');
    if (!audio || !bubble) return;

    function setAvailable(ok) {
      scene.classList.toggle('has-audio', ok);
      if (!ok) scene.classList.remove('is-playing');
      bubble.setAttribute('aria-disabled', String(!ok));
      bubble.tabIndex = ok ? 0 : -1;
    }

    function check() {
      setAvailable(audio.readyState >= 1 && isFinite(audio.duration) && audio.duration > 0);
    }

    function fail() { setAvailable(false); }

    audio.addEventListener('loadedmetadata', check);
    audio.addEventListener('emptied', check);
    audio.addEventListener('error', fail);
    Array.prototype.forEach.call(audio.querySelectorAll('source'), function (s) {
      s.addEventListener('error', fail);
    });
    audio.addEventListener('play', function () { scene.classList.add('is-playing'); });
    audio.addEventListener('pause', function () { scene.classList.remove('is-playing'); });
    audio.addEventListener('ended', function () {
      audio.currentTime = 0;
      scene.classList.remove('is-playing');
    });

    bubble.addEventListener('click', function () {
      if (!scene.classList.contains('has-audio')) return;
      if (audio.paused) {
        document.querySelectorAll('audio').forEach(function (a) {
          if (a !== audio && !a.paused) a.pause();
        });
        var p = audio.play();
        if (p && p.catch) p.catch(function () {});
      } else {
        audio.pause();
      }
    });

    check();
  }

  document.querySelectorAll('.karpik-scene').forEach(setup);
})();
