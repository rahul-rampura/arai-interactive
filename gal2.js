    var audio = document.getElementById('a');

    var mcs = document.getElementById('mcs');
    var ncsm = document.getElementById('ncsm');

    var back = document.getElementById('back');

    //Embedding video
    var vid = document.createElement('video');
    vid.id = "vid";
    vid.muted = "muted";
    vid.loop = "loop";
    vid.style.width = "100%";

    //Embedding video
    var vid2 = document.createElement('video');
    vid2.id = "vid";
    vid2.muted = "muted";
    vid2.loop = "loop";
    vid2.style.width = "100%";

    //Embedding video
    var vid3 = document.createElement('video');
    vid3.id = "vid";
    vid3.muted = "muted";
    vid3.loop = "loop";
    vid3.style.width = "100%";

    mcs.addEventListener('click', function() {

           mcs.style.opacity = "1";
           ncsm.style.opacity = "0.5";
            vid2.style.display = "block";
            vid3.style.display = "block";
            var vc = document.getElementById('video_container');
            vc.style.height = "44%";
            vc.style.width = "29%";
            vc.style.top = "10%";
            vc.style.left = "39%";
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/ncsm1.mp4";
            vc.appendChild(vid);
            audio.pause();
            vid.play();
            vid.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

            var vc2 = document.getElementById('video2_container');
            vc2.style.height = "30%";
            vc2.style.width = "28%";
            vc2.style.top = "34%";
            vc2.style.left = "69%";
            vc2.style.display = 'block';
            vc2.style.zIndex = "1000";
            vid2.src = "vid/ncsm2.mp4";
            vc2.appendChild(vid2);
            audio.pause();
            vid2.play();
            vid2.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc2.style.zIndex = "1";
                audio.play();
            });


            var vc3 = document.getElementById('video3_container');
            vc3.style.height = "47%";
            vc3.style.width = "28%";
            vc3.style.top = "50%";
            vc3.style.left = "10%";
            vc3.style.display = 'block';
            vc3.style.zIndex = "1000";
            vid3.src = "vid/ncsm3.mp4";
            vc3.appendChild(vid3);
            audio.pause();
            vid3.play();
            vid.addEventListener('ended', function() {
                location.href = "fid.html";
                vc.style.zIndex = "1";
                audio.play();
            });


    });

    ncsm.addEventListener('click', function() {
          

           mcs.style.opacity = "0.5";
           ncsm.style.opacity = "1";
            vid2.style.display = "none";
            vid3.style.display = "none";
            var vc = document.getElementById('video_container');

            vc.style.height = "50%";
            vc.style.width = "40%";
            vc.style.top = "16%";
            vc.style.left = "34%";


            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/mcs.mp4";
            vc.appendChild(vid);
            audio.pause();
            //document.getElementById('quit_div').style.display = "block";
            vid.play();
            /*
            quit_img.addEventListener('click', function() {
                console.log('Quit clicked');
                vc.style.zIndex = "1";
                vc.style.display = 'none';
                audio.play();
                vid.pause();
            });
            */
            vid.addEventListener('ended', function() {
                location.href = "fid.html";
                vc.style.zIndex = "1";
                audio.play();
            });
    });

    


    back.addEventListener('click', function() {
        location.href = "kothrud.html";
    });
