
    var fs_btn = document.getElementById('fs_btn');
    //fs_btn.addEventListener('click', function() {
        //Embedding launch video
        var vid = document.createElement('video');
        vid.id = "launch_video";
        vid.controls = "controls";
        vid.style.position = "absolute";
        vid.style.top = "0";
        vid.style.left = "0";
        vid.style.height = "100%";
        vid.style.width = "100%";
        vid.src = "arai-interactive-master/arai_logo.mp4";
        document.getElementById('container').appendChild(vid);

        //Play launch video
        var lvid = document.getElementById("launch_video");
        //document.getElementById('container').style.visibility = 'hidden';
        lvid.play();

        //Apply Fullscreen
        /*
        if (lvid.requestFullscreen) {
          lvid.requestFullscreen();
        } else if (lvid.msRequestFullscreen) {
          lvid.msRequestFullscreen();                //Fullscreen handling for edge
        } else if (lvid.mozRequestFullScreen) {
          lvid.mozRequestFullScreen();               //Fullscreen handling for firefox
        } else if (lvid.webkitRequestFullscreen) {
          lvid.webkitRequestFullscreen();            //Fullscreen andling for chrome
        }
        */
        
        //Redirect to home page after video ends
        lvid.addEventListener('ended', function() {
          location.href = "arai-interactive-master/home.html";
        });
    //});
