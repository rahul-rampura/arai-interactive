
    var kothrud_btn = document.getElementById('kothrud_btn');
    var htc_btn = document.getElementById('htc_btn');
    var fid_btn = document.getElementById('fid_btn');
    var exit_btn = document.getElementById('exit_btn');

    //Handle Kothrud
    kothrud_btn.addEventListener('click', function(){
        location.href = "kothrud.html";
    });

    //Handle HTC
    htc_btn.addEventListener('click', function(){
        location.href = "htc.html";
    });

    //Handle FID
    fid_btn.addEventListener('click', function(){
        location.href = "fid.html";
    });

    //Handle exit
    exit_btn.addEventListener('click', function(){
        window.top.close();
    });
