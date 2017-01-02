    //Buttons
    var htc_fmc_btn = document.getElementById('htc_fmc_btn');
    var htc_ptl_btn = document.getElementById('htc_ptl_btn');
    var htc_training_btn = document.getElementById('htc_training_btn');
    var htc_psl_btn = document.getElementById('htc_psl_btn');
    var htc_home_btn = document.getElementById('htc_home_btn');

    //Embedding video
    var vid = document.createElement('video');
    vid.id = "vid";
    vid.controls = "controls";
    vid.style.width = "100%";

    var htc_quit_btn = document.getElementById('htc_quit_btn');
    
    //Handling buttons 
    htc_fmc_btn.addEventListener('click', function() {
        console.log('Play htc fmc video');
        var vc = document.getElementById('htc_video_container');
        vc.style.display = 'block';
        vid.src = "arai_logo.mp4";
        vc.appendChild(vid);
        document.getElementById('htc_quit_div').style.display = "block";
        vid.play();
        htc_quit_btn.addEventListener('click', function() {
            console.log('Quit clicked');
            vc.style.display = 'none';
        });
        vid.addEventListener('ended', function() {
            location.href = "htc.html";
        });     
    });

    htc_ptl_btn.addEventListener('click', function() {
        console.log('Play htc ptl video');
        var vc = document.getElementById('htc_video_container');
        vc.style.display = 'block';
        vid.src = "arai_logo.mp4";
        vc.appendChild(vid);
        document.getElementById('htc_quit_div').style.display = "block";
        vid.play();
        htc_quit_btn.addEventListener('click', function() {
            console.log('Quit clicked');
            vc.style.display = 'none';
        });
        vid.addEventListener('ended', function() {
            location.href = "htc.html";
        });     
    });

    htc_training_btn.addEventListener('click', function() {
        console.log('Play htctraining video');
        var vc = document.getElementById('htc_video_container');
        vc.style.display = 'block';
        vid.src = "arai_logo.mp4";
        vc.appendChild(vid);
        document.getElementById('htc_quit_div').style.display = "block";
        vid.play();
        htc_quit_btn.addEventListener('click', function() {
            console.log('Quit clicked');
            vc.style.display = 'none';
        });
        vid.addEventListener('ended', function() {
            location.href = "htc.html";
        });     
    });
    
    htc_psl_btn.addEventListener('click', function() {
        console.log('Play chtcpsl video');
        var vc = document.getElementById('htc_video_container');
        vc.style.display = 'block';
        vid.src = "arai_logo.mp4";
        vc.appendChild(vid);
        document.getElementById('htc_quit_div').style.display = "block";
        vid.play();
        htc_quit_btn.addEventListener('click', function() {
            console.log('Quit clicked');
            vc.style.display = 'none';
        });
        vid.addEventListener('ended', function() {
            location.href = "htc.html";
        });     
    });
    
    htc_home_btn.addEventListener('click', function() {
        location.href = "home.html";
    });

