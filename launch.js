
    var fs_btn = document.getElementById('fs_btn');
    fs_btn.addEventListener('click', function() {
        //Embedding launch video
        var vid = document.createElement('video');
        vid.id = "launch_video";
        vid.controls = "controls";
        vid.src = "arai_logo.mp4";
        document.getElementsByTagName('body')[0].appendChild(vid);

        //Play launch video
        var lvid = document.getElementById("launch_video");
        document.getElementById('container').style.visibility = 'hidden';
        lvid.play();

        //Apply Fullscreen
        if (lvid.requestFullscreen) {
          console.log('Fullscreen1');
          lvid.requestFullscreen();
        } else if (lvid.msRequestFullscreen) {
          console.log('Fullscreen2');
          lvid.msRequestFullscreen();
        } else if (lvid.mozRequestFullScreen) {
          console.log('Fullscreen3');
          lvid.mozRequestFullScreen();
        } else if (lvid.webkitRequestFullscreen) {
          console.log('Fullscreen4');
          lvid.webkitRequestFullscreen();
        }
        
        //Redirect to home page after video ends
        lvid.addEventListener('ended', function() {
          location.href = "home.html";
        });
    });
