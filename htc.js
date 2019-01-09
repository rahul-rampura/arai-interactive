    
    var background = document.getElementById('htc_img');
    var audio = document.getElementById('a');
    var cs = document.getElementById('cs');

    //var gal = document.getElementById('gal');
    //var gal1_btn = document.getElementById('gal1_btn');
    var gal2_btn = document.getElementById('gal2_btn');
    //var gal3_btn = document.getElementById('gal3_btn');

     //Buttons
    var htc_fmc_btn = document.getElementById('fmc_btn');
    var htc_ptl_btn = document.getElementById('ptl_btn');
    var htc_training_btn = document.getElementById('training_btn');
    var htc_psl_btn = document.getElementById('psl_btn');
    var htc_ev_btn = document.getElementById('ev_btn');;
    var htc_home_btn = document.getElementById('home_btn');;
    

    var htc_fmc_pdf = document.getElementById('htc_fmc_pdf');
    var htc_ptl_pdf = document.getElementById('htc_ptl_pdf');
    var htc_psl_pdf = document.getElementById('htc_psl_pdf');
    var htc_ev_pdf = document.getElementById('htc_ev_pdf');
    var htc_training_pdf = document.getElementById('htc_training_pdf');

    //fmc options
    var fmc_img = document.getElementById('fmc_btn_img');
    var fmc_ops = document.getElementById('fmc_btn_ops');
    var fmc_ops_text = document.getElementById('fmc_btn_ops_text');
    var fmc_vid = document.getElementById('fmc_vid');
    var fmc_pdf = document.getElementById('fmc_pdf');
    var fmc_ppt = document.getElementById('fmc_ppt');

    var fmc_ops2 = document.getElementById('fmc_btn_ops2');     // ops2 added in Dec 2018
    var fmc_ops2_text = document.getElementById('fmc_btn_ops2_text');     // ops2 added in Dec 2018
    var fmc_vid2 = document.getElementById('fmc_vid2');
    var fmc_pdf2 = document.getElementById('fmc_pdf2');
    var fmc_ppt2 = document.getElementById('fmc_ppt2');

    var fmc_ops3 = document.getElementById('fmc_btn_ops3');     // ops3 added in Dec 2018
    var fmc_ops3_text = document.getElementById('fmc_btn_ops3_text');     // ops3 added in Dec 2018
    var fmc_pdf3 = document.getElementById('fmc_pdf3');

    //psl options
    var psl_ops = document.getElementById('psl_btn_ops');
    var psl_img = document.getElementById('psl_btn_img');
    var psl_vid = document.getElementById('psl_vid');
    var psl_pdf = document.getElementById('psl_pdf');
    var psl_ppt = document.getElementById('psl_ppt');

    //ptl options
    var ptl_ops = document.getElementById('ptl_btn_ops');
    var ptl_img = document.getElementById('ptl_btn_img');
    var ptl_vid = document.getElementById('ptl_vid');
    var ptl_pdf = document.getElementById('ptl_pdf');
    var ptl_ppt = document.getElementById('ptl_ppt');

    //ptl options
    var training_ops = document.getElementById('training_btn_ops');
    var training_img = document.getElementById('training_btn_img');
    var training_vid = document.getElementById('training_vid');
    var training_pdf = document.getElementById('training_pdf');
    var training_ppt = document.getElementById('training_ppt');

    //ev options
    var ev_ops = document.getElementById('ev_btn_ops');
    var ev_img = document.getElementById('ev_btn_img');
    var ev_vid = document.getElementById('ev_vid');
    var ev_pdf = document.getElementById('ev_pdf');
    var ev_ppt = document.getElementById('ev_ppt');


    //Embedding video
    var vid = document.createElement('video');
    vid.id = "vid";
    vid.controls = "controls";
    vid.style.width = "100%";

    var htc_quit_btn = document.getElementById('htc_quit_img');

    // PTL pdf buttons
    var ptl_pdf_quit_div = document.getElementById('ptl_pdf_quit_div');
    var ptl_pdf_quit_img = document.getElementById('ptl_pdf_quit_img');
    var ptl_pdf_sendmail_div = document.getElementById('ptl_pdf_sendmail_div');
    var ptl_pdf_sendmail_img = document.getElementById('ptl_pdf_sendmail_img');

    // PSL pdf buttons
    var psl_pdf_quit_div = document.getElementById('psl_pdf_quit_div');
    var psl_pdf_quit_img = document.getElementById('psl_pdf_quit_img');
    var psl_pdf_sendmail_div = document.getElementById('psl_pdf_sendmail_div');
    var psl_pdf_sendmail_img = document.getElementById('psl_pdf_sendmail_img');

    // Training pdf buttons
    var training_pdf_quit_div = document.getElementById('training_pdf_quit_div');
    var training_pdf_quit_img = document.getElementById('training_pdf_quit_img');
    var training_pdf_sendmail_div = document.getElementById('training_pdf_sendmail_div');
    var training_pdf_sendmail_img = document.getElementById('training_pdf_sendmail_img');

    // FMC pdf buttons
    var fmc_pdf_quit_div = document.getElementById('fmc_pdf_quit_div');
    var fmc_pdf_quit_img = document.getElementById('fmc_pdf_quit_img');
    var fmc_pdf_sendmail_div = document.getElementById('fmc_pdf_sendmail_div');
    var fmc_pdf_sendmail_img = document.getElementById('fmc_pdf_sendmail_img');

    // EV pdf buttons
    var ev_pdf_quit_div = document.getElementById('ev_pdf_quit_div');
    var ev_pdf_quit_img = document.getElementById('ev_pdf_quit_img');
    var ev_pdf_sendmail_div = document.getElementById('ev_pdf_sendmail_div');
    var ev_pdf_sendmail_img = document.getElementById('ev_pdf_sendmail_img');
    
    //Handling buttons
//fmc
    fmc_img.addEventListener('click', function() {
                vid.pause();
                audio.play();
            document.getElementById('htc_video_container').style.display = 'none';
        cs.style.display = 'none';
        fmc_ops.style.display = "block";
        fmc_ops2.style.display = "block";
        fmc_ops3.style.display = "block";
        //training_ops.style.display = "none";
        psl_ops.style.display = "none";
        ptl_ops.style.display = "none";
        training_ops.style.display = "none";
        ev_ops.style.display = "none";
        
        fmc_ops_text.style.display = "block";    
        fmc_ops2_text.style.display = "block";    
        fmc_ops3_text.style.display = "block";

        fmc_vid.addEventListener('click', function() {
           
            var vc = document.getElementById('htc_video_container');
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
                location.href = "htc.html";
                vc.style.zIndex = "1";
                audio.play();
            });

        });

        fmc_pdf.addEventListener('click', function() {
                vid.pause();
                audio.play();
            document.getElementById('htc_video_container').style.display = 'none';
            document.getElementById('fmc').data = "pdfs/fmce.pdf";
            htc_fmc_pdf.style.zIndex = "1000";
            htc_fmc_pdf.style.display = "block";
            fmc_pdf_quit_div.style.display = "block";
            fmc_pdf_sendmail_div.style.display = "block";
            fmc_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key3.html";
            });
            fmc_pdf_quit_img.addEventListener('click', function() {
                htc_fmc_pdf.style.display = "none";
                htc_fmc_pdf.style.zIndex = "0";
            });
        });

        fmc_ppt.addEventListener('click', function() {
                vid.pause();
                audio.play();
            document.getElementById('htc_video_container').style.display = 'none';
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('fmc').data = "ppts/SDL.pdf"
            htc_fmc_pdf.style.zIndex = "1000";
            htc_fmc_pdf.style.display = "block";
            fmc_pdf_quit_div.style.display = "block";
            fmc_pdf_sendmail_div.style.display = "none";
            fmc_pdf_quit_img.addEventListener('click', function() {
                htc_fmc_pdf.style.display = "none";
                htc_fmc_pdf.style.zIndex = "0";
            });
        }); 

        
        fmc_vid2.addEventListener('click', function() {
           
            var vc = document.getElementById('htc_video_container');
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
                location.href = "htc.html";
                vc.style.zIndex = "1";
                audio.play();
            });

        });

        fmc_pdf2.addEventListener('click', function() {
                vid.pause();
                audio.play();
            document.getElementById('htc_video_container').style.display = 'none';
            document.getElementById('fmc').data = "pdfs/aml.pdf";
            htc_fmc_pdf.style.zIndex = "1000";
            htc_fmc_pdf.style.display = "block";
            fmc_pdf_quit_div.style.display = "block";
            fmc_pdf_sendmail_div.style.display = "block";
            fmc_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key4.html";
            });
            fmc_pdf_quit_img.addEventListener('click', function() {
                htc_fmc_pdf.style.display = "none";
                htc_fmc_pdf.style.zIndex = "0";
            });
        });

        fmc_ppt2.addEventListener('click', function() {
                vid.pause();
                audio.play();
            document.getElementById('htc_video_container').style.display = 'none';
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('fmc').data = "ppts/AML.pdf"
            htc_fmc_pdf.style.zIndex = "1000";
            htc_fmc_pdf.style.display = "block";
            fmc_pdf_quit_div.style.display = "block";
            fmc_pdf_sendmail_div.style.display = "none";
            fmc_pdf_quit_img.addEventListener('click', function() {
                htc_fmc_pdf.style.display = "none";
                htc_fmc_pdf.style.zIndex = "0";
            });
        }); 

        fmc_pdf3.addEventListener('click', function() {
                vid.pause();
                audio.play();
            document.getElementById('htc_video_container').style.display = 'none';
            document.getElementById('fmc').data = "pdfs/fmce_bottom.pdf";
            htc_fmc_pdf.style.zIndex = "1000";
            htc_fmc_pdf.style.display = "block";
            fmc_pdf_quit_div.style.display = "block";
            fmc_pdf_sendmail_div.style.display = "block";
            fmc_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key5.html";
            });
            fmc_pdf_quit_img.addEventListener('click', function() {
                htc_fmc_pdf.style.display = "none";
                htc_fmc_pdf.style.zIndex = "0";
            });
        });

    });

//ptl
    htc_ptl_btn.addEventListener('click', function() {
                vid.pause();
                audio.play();
            document.getElementById('htc_video_container').style.display = 'none';
        cs.style.display = 'none';

        ptl_ops.style.display = "block";
        psl_ops.style.display = "none";
        training_ops.style.display = "none";
        //training_ops.style.display = "none";
        fmc_ops.style.display = "none";
        fmc_ops2.style.display = "none";
        fmc_ops3.style.display = "none";
        ev_ops.style.display = "none";
        fmc_ops_text.style.display = "none";    
        fmc_ops2_text.style.display = "none";    
        fmc_ops3_text.style.display = "none";

        ptl_vid.addEventListener('click', function() {
            
            var vc = document.getElementById('htc_video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/ECL.mp4";
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
                location.href = "htc.html";
                vc.style.zIndex = "1";
                audio.play();
            });
            
        });

        ptl_pdf.addEventListener('click', function() {
                vid.pause();
                audio.play();
            document.getElementById('htc_video_container').style.display = 'none';
            document.getElementById('p').data = "pdfs/HTC_PTL.pdf"
            htc_ptl_pdf.style.zIndex = "1000";
            htc_ptl_pdf.style.display = "block";
            ptl_pdf_quit_div.style.display = "block";
            ptl_pdf_sendmail_div.style.display = "block";
            ptl_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key7.html";
            });
            ptl_pdf_quit_img.addEventListener('click', function() {
                htc_ptl_pdf.style.display = "none";
                htc_ptl_pdf.style.zIndex = "0";
            });
        });

        ptl_ppt.addEventListener('click', function() {
                vid.pause();
                audio.play();
            document.getElementById('htc_video_container').style.display = 'none';
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('p').data = "ppts/PTL.pdf"
            htc_ptl_pdf.style.zIndex = "1000";
            htc_ptl_pdf.style.display = "block";
            ptl_pdf_quit_div.style.display = "block";
            ptl_pdf_sendmail_div.style.display = "none";
            ptl_pdf_quit_img.addEventListener('click', function() {
                htc_ptl_pdf.style.display = "none";
                htc_ptl_pdf.style.zIndex = "0";
            });
        });
    });

//training
    htc_training_btn.addEventListener('click', function() {
                vid.pause();
                audio.play();
        cs.style.display = 'none';
        training_ops.style.display = "block";
        psl_ops.style.display = "none";
        ptl_ops.style.display = "none";
        fmc_ops.style.display = "none";
        fmc_ops2.style.display = "none";
        fmc_ops3.style.display = "none";
        ev_ops.style.display = "none";
        fmc_ops_text.style.display = "none";    
        fmc_ops2_text.style.display = "none";    
        fmc_ops3_text.style.display = "none";

        /*
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
        */

        training_vid.addEventListener('click', function() {
        /*
        cs.style.display = 'none';
            document.getElementById('htc_video_container').style.display = 'visible';
            var vc = document.getElementById('htc_video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/NVH.mp4";
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
                location.href = "htc.html";
                vc.style.zIndex = "1";
                audio.play();
            });
           */
                vid.pause();
                audio.play();
            document.getElementById('htc_video_container').style.display = 'none';
            cs.style.right = "72%";
            cs.style.top = "15%";
            cs.style.display = 'block';
        });

        training_pdf.addEventListener('click', function() {
           
                vid.pause();
                audio.play();
        cs.style.display = 'none';
            document.getElementById('htc_video_container').style.display = 'none';
            document.getElementById('t').data = "pdfs/ttc.pdf"
            htc_training_pdf.style.zIndex = "1000";
            htc_training_pdf.style.display = "block";
            training_pdf_quit_div.style.display = "block";
            training_pdf_sendmail_div.style.display = "block";
            training_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key6.html";
            });
            training_pdf_quit_img.addEventListener('click', function() {
                htc_training_pdf.style.display = "none";
                htc_training_pdf.style.zIndex = "0";
            });
           

        });

        training_ppt.addEventListener('click', function() {
                vid.pause();
                audio.play();
            document.getElementById('htc_video_container').style.display = 'none';
            cs.style.right = "65%";
			cs.style.top = "15%";
            cs.style.display = 'block';
            /*
            document.getElementById('htc_video_container').style.display = 'none';
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('t').data = "ppts/PTL.pdf"
            htc_training_pdf.style.zIndex = "1000";
            htc_training_pdf.style.display = "block";
            training_pdf_quit_div.style.display = "block";
            training_pdf_sendmail_div.style.display = "none";
            training_pdf_quit_img.addEventListener('click', function() {
                htc_training_pdf.style.display = "none";
                htc_training_pdf.style.zIndex = "0";
            });
            */
        });

             
    });

//psl
    htc_psl_btn.addEventListener('click', function() {
                vid.pause();
                audio.play();
            document.getElementById('htc_video_container').style.display = 'none';
        cs.style.display = 'none';
        psl_ops.style.display = "block";
        //training_ops.style.display = "none";
        fmc_ops.style.display = "none";
        fmc_ops2.style.display = "none";
        ptl_ops.style.display = "none";
        training_ops.style.display = "none";
        ev_ops.style.display = "none";
        fmc_ops_text.style.display = "none";    
        fmc_ops2_text.style.display = "none";    
        fmc_ops3_text.style.display = "none";

        psl_vid.addEventListener('click', function() {
            document.getElementById('htc_video_container').style.display = 'visible';
           
            var vc = document.getElementById('htc_video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/PSL.mp4";
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

        psl_pdf.addEventListener('click', function() {
                vid.pause();
                audio.play();
            document.getElementById('htc_video_container').style.display = 'none';
            document.getElementById('ppt').data = "pdfs/HTC_PSL.pdf";
            htc_psl_pdf.style.zIndex = "1000";
            htc_psl_pdf.style.display = "block";
            psl_pdf_quit_div.style.display = "block";
            psl_pdf_sendmail_div.style.display = "block";
            psl_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key8.html";
            });
            psl_pdf_quit_img.addEventListener('click', function() {
                htc_psl_pdf.style.display = "none";
                htc_psl_pdf.style.zIndex = "0";
            });
        });

        psl_ppt.addEventListener('click', function() {
                vid.pause();
                audio.play();
            document.getElementById('htc_video_container').style.display = 'none';
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('ppt').data = "ppts/PSL.pdf"
            htc_psl_pdf.style.zIndex = "1000";
            htc_psl_pdf.style.display = "block";
            psl_pdf_quit_div.style.display = "block";
            psl_pdf_sendmail_div.style.display = "none";
            psl_pdf_quit_img.addEventListener('click', function() {
                htc_psl_pdf.style.display = "none";
                htc_psl_pdf.style.zIndex = "0";
            });
        });
    });

//ev
    htc_ev_btn.addEventListener('click', function() {
                vid.pause();
                audio.play();
        cs.style.display = 'none';
        training_ops.style.display = "none";
        psl_ops.style.display = "none";
        ptl_ops.style.display = "none";
        fmc_ops.style.display = "none";
        fmc_ops2.style.display = "none";
        fmc_ops3.style.display = "none";
        ev_ops.style.display = "block";
        fmc_ops_text.style.display = "none";    
        fmc_ops2_text.style.display = "none";    
        fmc_ops3_text.style.display = "none";

        /*        
        console.log('Play htcev video');
        var vc = document.getElementById('htc_video_container');
        vc.style.display = 'block';
        vid.src = "vid/EV_HEV.mp4";
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
        */

        ev_vid.addEventListener('click', function() {
        
        cs.style.display = 'none';
            document.getElementById('htc_video_container').style.display = 'visible';
            var vc = document.getElementById('htc_video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/EV_HEV.mp4";
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
                location.href = "htc.html";
                vc.style.zIndex = "1";
                audio.play();
            });
            
            /*
                vid.pause();
                audio.play();
            document.getElementById('htc_video_container').style.display = 'none';
            cs.style.right = "47%";
            cs.style.top = "17.5%";
            cs.style.display = 'block';
            */
        });

        ev_pdf.addEventListener('click', function() {
                vid.pause();
                audio.play();
            document.getElementById('htc_video_container').style.display = 'none';
            /*
            cs.style.right = "30%";
            cs.style.top = "15%";
            */
            cs.style.display = 'none';
            document.getElementById('htc_video_container').style.display = 'none';
            document.getElementById('ev').data = "pdfs/ev_hev.pdf"
            htc_ev_pdf.style.zIndex = "1000";
            htc_ev_pdf.style.display = "block";
            ev_pdf_quit_div.style.display = "block";
            ev_pdf_sendmail_div.style.display = "block";
            ev_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key9.html";
            });
            ev_pdf_quit_img.addEventListener('click', function() {
                htc_ev_pdf.style.display = "none";
                htc_ev_pdf.style.zIndex = "0";
            });

        });

        ev_ppt.addEventListener('click', function() {
                vid.pause();
                audio.play();
            document.getElementById('htc_video_container').style.display = 'none';
            /*
            cs.style.right = "30%";
			cs.style.top = "17.5%";
            cs.style.display = 'block';
            */
            cs.style.display = 'none';
            document.getElementById('htc_video_container').style.display = 'none';
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('t').data = "ppts/ev_hev_ppt.pdf"
            htc_training_pdf.style.zIndex = "1000";
            htc_training_pdf.style.display = "block";
            training_pdf_quit_div.style.display = "block";
            ev_pdf_sendmail_div.style.display = "block";
            training_pdf_quit_img.addEventListener('click', function() {
                htc_training_pdf.style.display = "none";
                htc_training_pdf.style.zIndex = "0";
            });
            
        });

             
    });

    background.addEventListener('click', function(){
        training_ops.style.display = "none";
        psl_ops.style.display = "none";
        ptl_ops.style.display = "none";
        fmc_ops.style.display = "none";
        fmc_ops2.style.display = "none";
        fmc_ops3.style.display = "none";
        ev_ops.style.display = "none";
        cs.style.display = 'none';
        fmc_ops_text.style.display = "none";    
        fmc_ops2_text.style.display = "none";    
        fmc_ops3_text.style.display = "none";
    });

    /*
    gal.addEventListener('click', function() {
        location.href = "gal5.html";
    });

    gal1_btn.addEventListener('click', function() {
        location.href = 'gal4.html';
    });
    */

    gal2_btn.addEventListener('click', function() {
        location.href = 'htcgal.html';
    });

    /*
    gal3_btn.addEventListener('click', function() {
        training_ops.style.display = "none";
        psl_ops.style.display = "none";
        ptl_ops.style.display = "none";
        fmc_ops.style.display = "none";
        fmc_ops2.style.display = "none";
        fmc_ops3.style.display = "none";
        ev_ops.style.display = "none";
        cs.style.display = 'none';
            cs.style.display = 'none';
            document.getElementById('htc_video_container').style.display = 'visible';
            var vc = document.getElementById('htc_video_container');
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
                vid.pause();
                audio.play();
            });
            vid.addEventListener('ended', function() {
                location.href = "htc.html";
                vc.style.zIndex = "1";
                audio.play();
            });
            
    });
    */

    htc_home_btn.addEventListener('click', function() {
        location.href = "home.html";
    });

