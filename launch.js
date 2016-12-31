
    var fs_btn = document.getElementById('fs_btn');
    fs_btn.addEventListener('click', function() {
      if (document.requestFullscreen) {
        console.log('Fullscreen1');
        document.requestFullscreen();
      } else if (document.msRequestFullscreen) {
        console.log('Fullscreen2');
        document.msRequestFullscreen();
      } else if (document.mozRequestFullScreen) {
        console.log('Fullscreen3');
        document.mozRequestFullScreen();
      } else if (document.webkitRequestFullscreen) {
        console.log('Fullscreen4');
        document.webkitRequestFullscreen();
      }
        location.href = "home.html";
    });
