    //Buttons
    var ftl_btn = document.getElementById('ftl_btn');
    var aml_btn = document.getElementById('aml_btn');
    var training_btn = document.getElementById('training_btn');
    var cae_btn = document.getElementById('cae_btn');
    var home_btn = document.getElementById('home_btn');

    //Embedding video
    var vid = document.createElement('video');
    vid.id = "vid";
    vid.controls = "controls";
    vid.style.width = "100%";

    var quit_btn = document.getElementById('quit_btn');
    
    //Handling buttons 
    ftl_btn.addEventListener('click', function() {
        document.getElementById('video_container').style.display = 'block';
        console.log('Play ftl video');
        vid.src = "arai_logo.mp4";
        document.getElementById('video_container').appendChild(vid);
        document.getElementById('quit_div').style.display = "block";
        vid.play();
        quit_btn.addEventListener('click', function() {
            console.log('Quit clicked');
            document.getElementById('video_container').style.display = 'none';
        });
        vid.addEventListener('ended', function() {
            location.href = "fid.html";
        });     
    });

    aml_btn.addEventListener('click', function() {
        console.log('Play aml video');
    });

    training_btn.addEventListener('click', function() {
        console.log('Play training video');
    });
    
    cae_btn.addEventListener('click', function() {
        console.log('Play cae video');
    });
    
    home_btn.addEventListener('click', function() {
        location.href = "home.html";
    });

