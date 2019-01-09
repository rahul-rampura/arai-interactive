    
    var background = document.getElementById('fid_img');
    var gal = document.getElementById('gal');           // Removed gallery buttons in Dec 2018
    //var ftlg = document.getElementById('ftlg');  
    var container = document.getElementById('container');  
    var pdf = document.getElementById('pdf');
    var t_pdf = document.getElementById('t_pdf');
    
    var audio = document.getElementById('a');

    //Hotspot Buttons
    //var ftl_btn = document.getElementById('ftl_btn');
    //var aml_btn = document.getElementById('aml_btn');
    //var training_btn = document.getElementById('training_btn');
    //var cae_btn = document.getElementById('cae_btn');
    //var home_btn = document.getElementById('home_btn');

    //FTL options
    var ftl_ops = document.getElementById('ftl_btn_ops');
    var ftl_img = document.getElementById('ftl_btn_img');
    var ftl_vid = document.getElementById('ftl_vid');
    var ftl_pdf = document.getElementById('ftl_pdf');
    var ftl_ppt = document.getElementById('ftl_ppt');

    //AML options - Removed in Dec 2018
    //var aml_ops = document.getElementById('aml_btn_ops');
    //var aml_img = document.getElementById('aml_btn_img');
    //var aml_vid = document.getElementById('aml_vid');
    //var aml_pdf = document.getElementById('aml_pdf');
    //var aml_ppt = document.getElementById('aml_ppt');

    //TRAINING options
    var training_ops = document.getElementById('training_btn_ops');
    var training_img = document.getElementById('training_btn_img');
    var training_vid = document.getElementById('training_vid');
    var training_pdf = document.getElementById('training_pdf');
    var training_ppt = document.getElementById('training_ppt');

    //CAE options - Removed in Dec 2018
    //var cae_ops = document.getElementById('cae_btn_ops');
    //var cae_img = document.getElementById('cae_btn_img');
    //var cae_vid = document.getElementById('cae_vid');
    //var cae_pdf = document.getElementById('cae_pdf');
    //var cae_ppt = document.getElementById('cae_ppt');
    
    //Embedding video
    var vid = document.createElement('video');
    vid.id = "vid";
    vid.controls = "controls";
    vid.style.width = "100%";

    var quit_img = document.getElementById('quit_img');
    
    // FTL pdf buttons
    var pdf_quit_div = document.getElementById('pdf_quit_div');
    var pdf_quit_img = document.getElementById('pdf_quit_img');
    var pdf_sendmail_div = document.getElementById('pdf_sendmail_div');
    var pdf_sendmail_img = document.getElementById('pdf_sendmail_img');
    
    // AML pdf buttons
    //var a_pdf_quit_div = document.getElementById('a_pdf_quit_div');
    //var a_pdf_quit_div = document.getElementById('a_pdf_quit_div');
    //var a_pdf_sendmail_div = document.getElementById('a_pdf_sendmail_div');
    //var a_pdf_sendmail_img = document.getElementById('a_pdf_sendmail_img');
    
    // Training/Academy pdf buttons (Training was replaced by Academy in June 2018)
    var t_pdf_quit_div = document.getElementById('t_pdf_quit_div');
    var t_pdf_quit_img = document.getElementById('t_pdf_quit_img');
    var t_pdf_sendmail_div = document.getElementById('t_pdf_sendmail_div');
    var t_pdf_sendmail_img = document.getElementById('t_pdf_sendmail_img');
    
    // CAE pdf buttons
    //var c_pdf_quit_img = document.getElementById('c_pdf_quit_img');
    //var c_pdf_quit_img = document.getElementById('c_pdf_quit_img');
    //var c_pdf_sendmail_div = document.getElementById('c_pdf_sendmail_div');
    //var c_pdf_sendmail_img = document.getElementById('c_pdf_sendmail_img');
    
    //Handling buttons for ftl
    ftl_img.addEventListener('click', function() {
            audio.play();
            vid.pause();
            document.getElementById('video_container').style.display = 'none';
        ftl_ops.style.display = "block";
        //aml_ops.style.display = "none";
        training_ops.style.display = "none";
        //cae_ops.style.display = "none";
        ftl_vid.addEventListener('click', function() {
            
            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/SDL.mp4";
            vc.appendChild(vid);
            audio.pause();
            document.getElementById('quit_div').style.display = "block";
            vid.play();
            quit_img.addEventListener('click', function() {
                console.log('Quit clicked');
                vc.style.zIndex = "1";
                vc.style.display = 'none';
                vid.pause();
                audio.play();
            });
            vid.addEventListener('ended', function() {
                location.href = "fid.html";
                vc.style.zIndex = "1";
                audio.play();
            });
            
        });

        ftl_pdf.addEventListener('click', function() {
                audio.play();
            vid.pause();
            document.getElementById('video_container').style.display = 'none';
            document.getElementById('f').data = "pdfs/fid.pdf";
            pdf.style.zIndex = "1000";
            pdf.style.display = "block";
            pdf_quit_div.style.display = "block";
            pdf_sendmail_div.style.display = "block";
            pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key1.html";
            });
            pdf_quit_img.addEventListener('click', function() {
                pdf.style.display = "none";
                pdf.style.zIndex = "0";
            });
        });

        ftl_ppt.addEventListener('click', function() {
                audio.play();
            vid.pause();
            document.getElementById('video_container').style.display = 'none';
            document.getElementById('f').data = "ppts/FID_latest.pdf";
            pdf.style.zIndex = "1000";
            pdf.style.display = "block";
            pdf_quit_div.style.display = "block";
            pdf_sendmail_div.style.display = "none";
            pdf_quit_img.addEventListener('click', function() {
                pdf.style.display = "none";
                pdf.style.zIndex = "0";
            });
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
        });
    });

    //Handling buttons for aml - Removed in Dec 2018
/*
    aml_img.addEventListener('click', function() {
                audio.play();
            vid.pause();
            document.getElementById('video_container').style.display = 'none';
        aml_ops.style.display = "block";
        training_ops.style.display = "none";
        cae_ops.style.display = "none";
        ftl_ops.style.display = "none";
        aml_vid.addEventListener('click', function() {
            
            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/AML.mp4";
            vc.appendChild(vid);
            audio.pause();
            document.getElementById('quit_div').style.display = "block";
            vid.play();
            quit_img.addEventListener('click', function() {
               console.log('Quit clicked');
               vc.style.zIndex = "1";
               vc.style.display = 'none';
                vid.pause();
                audio.play();
            });
            vid.addEventListener('ended', function() {
                location.href = "fid.html";
                vc.style.zIndex = "1";
                audio.play();
            });
            
            
        });

        aml_pdf.addEventListener('click', function() {
                audio.play();
            vid.pause();
            document.getElementById('video_container').style.display = 'none';
            document.getElementById('appt').data = "pdfs/aml.pdf";
            a_pdf.style.zIndex = "1000"; 
            a_pdf.style.display = "block";
            a_pdf_quit_div.style.display = "block";
            a_pdf_sendmail_div.style.display = "block";
            a_pdf_quit_img.addEventListener('click', function() {
                a_pdf.style.display = "none";
                a_pdf.style.zIndex = "0";
            });
        }); 

        aml_ppt.addEventListener('click', function() {
                audio.play();
            vid.pause();
            document.getElementById('video_container').style.display = 'none';
            document.getElementById('appt').data = "ppts/aml.pdf";
            a_pdf.style.zIndex = "1000";
            a_pdf.style.display = "block";
            a_pdf_quit_div.style.display = "block";
            a_pdf_sendmail_div.style.display = "none";
            a_pdf_quit_img.addEventListener('click', function() {
                a_pdf.style.display = "none";
                a_pdf.style.zIndex = "0";
            });
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
        });    
    });
*/

    //Handling buttos for training
    training_img.addEventListener('click', function() {
                audio.play();
            vid.pause();
            document.getElementById('video_container').style.display = 'none';
        training_ops.style.display = "block";
        ftl_ops.style.display = "none";
        //aml_ops.style.display = "none";
        //cae_ops.style.display = "none";
        training_vid.addEventListener('click', function() {
            
            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/aca.mp4";
            vc.appendChild(vid);
            audio.pause();
            document.getElementById('quit_div').style.display = "block";
            vid.play();
            quit_img.addEventListener('click', function() {
                console.log('Quit clicked');
                vc.style.zIndex = "1";
                vc.style.display = 'none';
                vid.pause();
                audio.play();
            });
            vid.addEventListener('ended', function() {
                location.href = "fid.html";
                vc.style.zIndex = "1";
                audio.play();
            });
            
        });

        training_pdf.addEventListener('click', function() {
                audio.play();
            vid.pause();
            document.getElementById('video_container').style.display = 'none';
         document.getElementById('t').data = "pdfs/aca.pdf";
            
            t_pdf.style.zIndex = "1000";
            t_pdf.style.display = "block";
            t_pdf_quit_div.style.display = "block";
            t_pdf_sendmail_div.style.display = "block";
            t_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key2.html";
            });
            t_pdf_quit_img.addEventListener('click', function() {
                t_pdf.style.display = "none";
                t_pdf.style.zIndex = "0";
            });
            
        });

        training_ppt.addEventListener('click', function() {
                audio.play();
            vid.pause();
            document.getElementById('video_container').style.display = 'none';
         document.getElementById('t').data = "ppts/academy_latest.pdf";

            t_pdf.style.zIndex = "1000";
            t_pdf.style.display = "block";
            t_pdf_quit_div.style.display = "block";
            t_pdf_sendmail_div.style.display = "none";
            t_pdf_quit_img.addEventListener('click', function() {
                t_pdf.style.display = "none";
                t_pdf.style.zIndex = "0";
            });
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
        });
    });
    
    //Handling buttons for cae - Removed in Dec 2018
/*
    cae_img.addEventListener('click', function() {
                audio.play();
            vid.pause();
            document.getElementById('video_container').style.display = 'none';
        cae_ops.style.display = "block";
        ftl_ops.style.display = "none";
        aml_ops.style.display = "none";
        training_ops.style.display = "none";
        cae_vid.addEventListener('click', function() {
            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/CAE.mp4";
            vc.appendChild(vid);
            audio.pause();
            document.getElementById('quit_div').style.display = "block";
            vid.play();
            quit_img.addEventListener('click', function() {
                console.log('Quit clicked');
                vc.style.zIndex = "1";
                vc.style.display = 'none';
                audio.play();
                vid.pause();
            });
            vid.addEventListener('ended', function() {
                location.href = "fid.html";
                vc.style.zIndex = "1";
                audio.play();
            });
        });

        cae_pdf.addEventListener('click', function() {
                audio.play();
            vid.pause();
            document.getElementById('video_container').style.display = 'none';
            document.getElementById('ppt').data = "pdfs/cae.pdf";
            c_pdf.style.zIndex = "1000";
            c_pdf.style.display = "block";
            c_pdf_quit_div.style.display = "block";
            c_pdf_sendmail_div.style.display = "block";
            c_pdf_quit_img.addEventListener('click', function() {
                c_pdf.style.display = "none";
                c_pdf.style.zIndex = "0";
            });
        });

        cae_ppt.addEventListener('click', function() {
                audio.play();
            vid.pause();
            document.getElementById('video_container').style.display = 'none';
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('ppt').data = "ppts/CAE.pdf";
            c_pdf.style.zIndex = "1000";
            c_pdf.style.display = "block";
            c_pdf_quit_div.style.display = "block";
            c_pdf_sendmail_div.style.display = "none";
            c_pdf_quit_img.addEventListener('click', function() {
                c_pdf.style.display = "none";
                c_pdf.style.zIndex = "0";
            });
        });    
    });
*/

    background.addEventListener('click', function(){
        //cae_ops.style.display = "none";
        ftl_ops.style.display = "none";
        //aml_ops.style.display = "none";
        training_ops.style.display = "none";
    });

// Removed gallery buttons in Dec 2018    

    gal.addEventListener('click', function() {
            ftl_ops.style.display = "none";
            //cae_ops.style.display = "none";
            //aml_ops.style.display = "none";
            training_ops.style.display = "none";
            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/ARAI_informative.mp4";
            vc.appendChild(vid);
            audio.pause();
            document.getElementById('quit_div').style.display = "block";
            vid.play();
            quit_img.addEventListener('click', function() {
                console.log('Quit clicked');
                vc.style.zIndex = "1";
                vc.style.display = 'none';
                audio.play();
                vid.pause();
            });
            vid.addEventListener('ended', function() {
                location.href = "fid.html";
                vc.style.zIndex = "1";
                audio.play();
            });
   });

/*
   ftlg.addEventListener('click', function() {
       location.href =  "gal3.html";
   });
*/    
    home_btn.addEventListener('click', function() {
        location.href = "home.html";
    });

