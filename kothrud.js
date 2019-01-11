
    var audio = document.getElementById('a');  
    var coming = document.getElementById('coming_soon');
    var background = document.getElementById('kothrud_img');
    //Buttons
    var ecl_btn = document.getElementById('ecl_btn');
    var pte_btn = document.getElementById('pte_btn');
    var shl_btn = document.getElementById('shl_btn');
    var psl_btn = document.getElementById('psl_btn');
    var cae_btn = document.getElementById('cae_btn');
    var nvh_btn = document.getElementById('nvh_btn');
    var vel_btn = document.getElementById('vel_btn');
    var sdl_btn = document.getElementById('sdl_btn');
    var cal_btn = document.getElementById('cal_btn');
    var aed_btn = document.getElementById('aed_btn');
    //var aml_btn = document.getElementById('aml_btn');     // Removed in Dec 2018
    var impc_btn = document.getElementById('impc_btn');
    //var bdcp_btn = document.getElementById('bdcp_btn');
    //var aca_btn = document.getElementById('aca_btn');     // Removed in June 2018
    var do_btn = document.getElementById('do_btn');
    var hmr_btn = document.getElementById('hmr_btn');
    var cmc_btn = document.getElementById('cmc_btn');	//New button-CMC June-2017
    var pmd_btn = document.getElementById('pmd_btn');	//New button-PMD June-2017
    var met_btn = document.getElementById('met_btn');	//New button-MET June-2018
    var tg_btn = document.getElementById('tg_btn');	    //New button-TG June-2018
    var erl_btn = document.getElementById('erl_btn');	    //New button-TG June-2018

    var gal1_btn = document.getElementById('gal1_btn');
    //var gal2_btn = document.getElementById('gal2_btn');   // Remove AML gallery button in Dec 2018

    var home_btn = document.getElementById('home_btn');

    //ecl  options
    var ecl_ops = document.getElementById('ecl_btn_ops');
    var ecl_img = document.getElementById('ecl_btn_img');
    var ecl_vid = document.getElementById('ecl_vid');
    var ecl_pdf = document.getElementById('ecl_pdf');
    var ecl_ppt = document.getElementById('ecl_ppt');

    //pte options
    var pte_ops = document.getElementById('pte_btn_ops');
    var pte_ops_text = document.getElementById('pte_btn_ops_text');
    var pte_ops2 = document.getElementById('pte_btn_ops2');
    var pte_ops2_text = document.getElementById('pte_btn_ops2_text');
    var pte_img = document.getElementById('pte_btn_img');
    var pte_vid = document.getElementById('pte_vid');
    var pte_pdf = document.getElementById('pte_pdf');
    var pte_pdf2 = document.getElementById('pte_pdf2');
    var pte_ppt = document.getElementById('pte_ppt');

    //shl options
    var shl_ops = document.getElementById('shl_btn_ops');
    var shl_img = document.getElementById('shl_btn_img');
    var shl_vid = document.getElementById('shl_vid');
    var shl_pdf = document.getElementById('shl_pdf');
    var shl_ppt = document.getElementById('shl_ppt');

    //psl options
    var psl_ops = document.getElementById('psl_btn_ops');
    var psl_img = document.getElementById('psl_btn_img');
    var psl_vid = document.getElementById('psl_vid');
    var psl_pdf = document.getElementById('psl_pdf');
    var psl_ppt = document.getElementById('psl_ppt');


    //cae options
    var cae_ops = document.getElementById('cae_btn_ops');
    var cae_img = document.getElementById('cae_btn_img');
    var cae_vid = document.getElementById('cae_vid');
    var cae_pdf = document.getElementById('cae_pdf');
    var cae_ppt = document.getElementById('cae_ppt');


    //nvh options
    var nvh_ops = document.getElementById('nvh_btn_ops');
    var nvh_img = document.getElementById('nvh_btn_img');
    var nvh_vid = document.getElementById('nvh_vid');
    var nvh_pdf = document.getElementById('nvh_pdf');
    var nvh_ppt = document.getElementById('nvh_ppt');

    //vel options
    var vel_ops = document.getElementById('vel_btn_ops');
    var vel_img = document.getElementById('vel_btn_img');
    var vel_vid = document.getElementById('vel_vid');
    var vel_pdf = document.getElementById('vel_pdf');
    var vel_ppt = document.getElementById('vel_ppt');

    //sdl options
    var sdl_ops = document.getElementById('sdl_btn_ops');
    var sdl_img = document.getElementById('sdl_btn_img');
    var sdl_vid = document.getElementById('sdl_vid');
    var sdl_pdf = document.getElementById('sdl_pdf');
    var sdl_ppt = document.getElementById('sdl_ppt');

    //cal options
    var cal_ops = document.getElementById('cal_btn_ops');
    var cal_img = document.getElementById('cal_btn_img');
    var cal_vid = document.getElementById('cal_vid');
    var cal_pdf = document.getElementById('cal_pdf');
    var cal_ppt = document.getElementById('cal_ppt');

    //aed options
    var aed_ops = document.getElementById('aed_btn_ops');
    var aed_img = document.getElementById('aed_btn_img');
    var aed_vid = document.getElementById('aed_vid');
    var aed_pdf = document.getElementById('aed_pdf');
    var aed_ppt = document.getElementById('aed_ppt');

    //aml options - removed in Dec 2018
    //var aml_ops = document.getElementById('aml_btn_ops');
    //var aml_img = document.getElementById('aml_btn_img');
    //var aml_vid = document.getElementById('aml_vid');
    //var aml_pdf = document.getElementById('aml_pdf');
    //var aml_ppt = document.getElementById('aml_ppt');

    //impc options
    var impc_ops = document.getElementById('impc_btn_ops');
    var impc_img = document.getElementById('impc_btn_img');
    var impc_vid = document.getElementById('impc_vid');
    //var impc_pdf = document.getElementById('impc_pdf');
    var impc_ppt = document.getElementById('impc_ppt');

    //bdcp options
    //var bdcp_ops = document.getElementById('bdcp_btn_ops');
    //var bdcp_img = document.getElementById('bdcp_btn_img');
    //var bdcp_vid = document.getElementById('bdcp_vid');
    //var bdcp_pdf = document.getElementById('bdcp_pdf');
    //var bdcp_ppt = document.getElementById('bdcp_ppt');

    //aca options - removed in June 2018
    //var aca_ops = document.getElementById('aca_btn_ops');
    //var aca_img = document.getElementById('aca_btn_img');
    //var aca_vid = document.getElementById('aca_vid');
    //var aca_pdf = document.getElementById('aca_pdf');
    //var aca_ppt = document.getElementById('aca_ppt');

    //do options
    var do_ops = document.getElementById('do_btn_ops');
    var do_img = document.getElementById('do_btn_img');
    var do_vid = document.getElementById('do_vid');
    var do_pdf = document.getElementById('do_pdf');
    var do_ppt = document.getElementById('do_ppt');

    //hmr options
    var hmr_ops = document.getElementById('hmr_btn_ops');
    var hmr_img = document.getElementById('hmr_btn_img');
    var hmr_vid = document.getElementById('hmr_vid');
    var hmr_pdf = document.getElementById('hmr_pdf');
    var hmr_ppt = document.getElementById('hmr_ppt');

    //cmc options - new - 2017
    var cmc_ops = document.getElementById('cmc_btn_ops');
    var cmc_img = document.getElementById('cmc_btn_img');
    var cmc_vid = document.getElementById('cmc_vid');
    var cmc_pdf = document.getElementById('cmc_pdf');
    var cmc_ppt = document.getElementById('cmc_ppt');

    //pmd options - new - 2017
    var pmd_ops = document.getElementById('pmd_btn_ops');
    var pmd_img = document.getElementById('pmd_btn_img');
    var pmd_vid = document.getElementById('pmd_vid');
    var pmd_pdf = document.getElementById('pmd_pdf');
    var pmd_ppt = document.getElementById('pmd_ppt');

    //met options - new - 2018
    var met_ops = document.getElementById('met_btn_ops');
    var met_img = document.getElementById('met_btn_img');
    var met_vid = document.getElementById('met_vid');
    var met_pdf = document.getElementById('met_pdf');
    var met_ppt = document.getElementById('met_ppt');

    //tg (technology  group) options - new - 2018
    var tg_ops = document.getElementById('tg_btn_ops');
    var tg_img = document.getElementById('tg_btn_img');
    var tg_vid = document.getElementById('tg_vid');
    var tg_pdf = document.getElementById('tg_pdf');
    var tg_ppt = document.getElementById('tg_ppt');

    //erl options - new - 2018
    var erl_ops = document.getElementById('erl_btn_ops');
    var erl_img = document.getElementById('erl_btn_img');
    var erl_vid = document.getElementById('erl_vid');
    var erl_pdf = document.getElementById('erl_pdf');
    var erl_ppt = document.getElementById('erl_ppt');
 
    //Embedding video
    var vid = document.createElement('video');
    vid.id = "vid";
    vid.controls = "controls";
    vid.style.width = "100%";
    var quit_img = document.getElementById('quit_img');
  
    //Quit and mail buttons  -- Mail buttons added in Dec 2018
    var ecl_pdf_quit_div = document.getElementById('ecl_pdf_quit_div');
    var ecl_pdf_quit_img = document.getElementById('ecl_pdf_quit_img');
    var ecl_pdf_sendmail_div = document.getElementById('ecl_pdf_sendmail_div');
    var ecl_pdf_sendmail_img = document.getElementById('ecl_pdf_sendmail_img');

    var pte_pdf_quit_div = document.getElementById('pte_pdf_quit_div');
    var pte_pdf_quit_img = document.getElementById('pte_pdf_quit_img');
    var pte_pdf_sendmail_div = document.getElementById('pte_pdf_sendmail_div');
    var pte_pdf_sendmail_img = document.getElementById('pte_pdf_sendmail_img');

    var shl_pdf_quit_div = document.getElementById('shl_pdf_quit_div');
    var shl_pdf_quit_img = document.getElementById('shl_pdf_quit_img');
    var shl_pdf_sendmail_div = document.getElementById('shl_pdf_sendmail_div');
    var shl_pdf_sendmail_img = document.getElementById('shl_pdf_sendmail_img');

    var psl_pdf_quit_div = document.getElementById('psl_pdf_quit_div');
    var psl_pdf_quit_img = document.getElementById('psl_pdf_quit_img');
    var psl_pdf_sendmail_div = document.getElementById('psl_pdf_sendmail_div');
    var psl_pdf_sendmail_img = document.getElementById('psl_pdf_sendmail_img');

    var cae_pdf_quit_div = document.getElementById('cae_pdf_quit_div');
    var cae_pdf_quit_img = document.getElementById('cae_pdf_quit_img');
    var cae_pdf_sendmail_div = document.getElementById('cae_pdf_sendmail_div');
    var cae_pdf_sendmail_img = document.getElementById('cae_pdf_sendmail_img');

    var nvh_pdf_quit_div = document.getElementById('nvh_pdf_quit_div');
    var nvh_pdf_quit_img = document.getElementById('nvh_pdf_quit_img');
    var nvh_pdf_sendmail_div = document.getElementById('nvh_pdf_sendmail_div');
    var nvh_pdf_sendmail_img = document.getElementById('nvh_pdf_sendmail_img');

    var vel_pdf_quit_div = document.getElementById('vel_pdf_quit_div');
    var vel_pdf_quit_img = document.getElementById('vel_pdf_quit_img');
    var vel_pdf_sendmail_div = document.getElementById('vel_pdf_sendmail_div');
    var vel_pdf_sendmail_img = document.getElementById('vel_pdf_sendmail_img');
    
    var sdl_pdf_quit_div = document.getElementById('sdl_pdf_quit_div');
    var sdl_pdf_quit_img = document.getElementById('sdl_pdf_quit_img');
    var sdl_pdf_sendmail_div = document.getElementById('sdl_pdf_sendmail_div');
    var sdl_pdf_sendmail_img = document.getElementById('sdl_pdf_sendmail_img');

    var cal_pdf_quit_div = document.getElementById('cal_pdf_quit_div');
    var cal_pdf_quit_img = document.getElementById('cal_pdf_quit_img');
    var cal_pdf_sendmail_div = document.getElementById('cal_pdf_sendmail_div');
    var cal_pdf_sendmail_img = document.getElementById('cal_pdf_sendmail_img');

    var aed_pdf_quit_div = document.getElementById('aed_pdf_quit_div');
    var aed_pdf_quit_img = document.getElementById('aed_pdf_quit_img');
    var aed_pdf_sendmail_div = document.getElementById('aed_pdf_sendmail_div');
    var aed_pdf_sendmail_img = document.getElementById('aed_pdf_sendmail_img');

    // AML button removed in Dec 2018
    //var aml_pdf_quit_div = document.getElementById('aml_pdf_quit_div');
    //var aml_pdf_quit_img = document.getElementById('aml_pdf_quit_img');
    //var aml_pdf_sendmail_div = document.getElementById('aml_pdf_sendmail_div');
    //var aml_pdf_sendmail_img = document.getElementById('aml_pdf_sendmail_img');

    var impc_pdf_quit_div = document.getElementById('impc_pdf_quit_div');
    var impc_pdf_quit_img = document.getElementById('impc_pdf_quit_img');
    var impc_pdf_sendmail_div = document.getElementById('impc_pdf_sendmail_div');
    var impc_pdf_sendmail_img = document.getElementById('impc_pdf_sendmail_img');

    //var bdcp_pdf_quit_div = document.getElementById('bdcp_pdf_quit_div');
    //var bdcp_pdf_quit_img = document.getElementById('bdcp_pdf_quit_img');
    //var bdcp_pdf_sendmail_div = document.getElementById('bdcp_pdf_sendmail_div');
    //var bdcp_pdf_sendmail_img = document.getElementById('bdcp_pdf_sendmail_img');

    // Academy button removed in June 2018
    //var aca_pdf_quit_div = document.getElementById('aca_pdf_quit_div');
    //var aca_pdf_quit_img = document.getElementById('aca_pdf_quit_img');
    //var aca_pdf_sendmail_div = document.getElementById('aca_pdf_sendmail_div');
    //var aca_pdf_sendmail_img = document.getElementById('aca_pdf_sendmail_img');

    var do_pdf_quit_div = document.getElementById('do_pdf_quit_div');
    var do_pdf_quit_img = document.getElementById('do_pdf_quit_img');
    var do_pdf_sendmail_div = document.getElementById('do_pdf_sendmail_div');
    var do_pdf_sendmail_img = document.getElementById('do_pdf_sendmail_img');

    var hmr_pdf_quit_div = document.getElementById('hmr_pdf_quit_div');
    var hmr_pdf_quit_img = document.getElementById('hmr_pdf_quit_img');
    var hmr_pdf_sendmail_div = document.getElementById('hmr_pdf_sendmail_div');
    var hmr_pdf_sendmail_img = document.getElementById('hmr_pdf_sendmail_img');

    var cmc_pdf_quit_div = document.getElementById('cmc_pdf_quit_div');
    var cmc_pdf_quit_img = document.getElementById('cmc_pdf_quit_img');
    var cmc_pdf_sendmail_div = document.getElementById('cmc_pdf_sendmail_div');
    var cmc_pdf_sendmail_img = document.getElementById('cmc_pdf_sendmail_img');

    var pmd_pdf_quit_div = document.getElementById('pmd_pdf_quit_div');
    var pmd_pdf_quit_img = document.getElementById('pmd_pdf_quit_img');
    var pmd_pdf_sendmail_div = document.getElementById('pmd_pdf_sendmail_div');
    var pmd_pdf_sendmail_img = document.getElementById('pmd_pdf_sendmail_img');

    // New button - MET - June 2018
    var met_pdf_quit_div = document.getElementById('met_pdf_quit_div');
    var met_pdf_quit_img = document.getElementById('met_pdf_quit_img');
    var met_pdf_sendmail_div = document.getElementById('met_pdf_sendmail_div');
    var met_pdf_sendmail_img = document.getElementById('met_pdf_sendmail_img');

    // New button - TG - June 2018
    var tg_pdf_quit_div = document.getElementById('tg_pdf_quit_div');
    var tg_pdf_quit_img = document.getElementById('tg_pdf_quit_img');
    var tg_pdf_sendmail_div = document.getElementById('tg_pdf_sendmail_div');
    var tg_pdf_sendmail_img = document.getElementById('tg_pdf_sendmail_img');

    // New button - ERL - June 2018
    var erl_pdf_quit_div = document.getElementById('erl_pdf_quit_div');
    var erl_pdf_quit_img = document.getElementById('erl_pdf_quit_img');
    var erl_pdf_sendmail_div = document.getElementById('erl_pdf_sendmail_div');
    var erl_pdf_sendmail_img = document.getElementById('erl_pdf_sendmail_img');

    //CAE
    cae_btn.addEventListener('click', function() {
         
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "block";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";

        cae_vid.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
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
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            document.getElementById('cae').data = "pdfs/cae.pdf";
            cae_pdf_div.style.zIndex = "1000";
            cae_pdf_div.style.display = "block";
            cae_pdf_quit_div.style.display = "block";
            cae_pdf_sendmail_div.style.display = "block";
            cae_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key17.html";
            });
            cae_pdf_quit_img.addEventListener('click', function() {
                cae_pdf_div.style.display = "none";
                cae_pdf_div.style.zIndex = "0";
            });
        });

        cae_ppt.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('cae').data = "ppts/CAE_latest.pdf";
            cae_pdf_div.style.zIndex = "1000";
            cae_pdf_div.style.display = "block";
            cae_pdf_quit_div.style.display = "block";
            cae_pdf_sendmail_div.style.display = "none";
            cae_pdf_quit_img.addEventListener('click', function() {
                cae_pdf_div.style.display = "none";
                cae_pdf_div.style.zIndex = "0";
            });
        });
    });


//ECL
    ecl_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "block";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";

        ecl_vid.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
            var vc = document.getElementById('video_container');
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
                audio.play();
                vid.pause();
            });
            vid.addEventListener('ended', function() {
                location.href = "fid.html";
                vc.style.zIndex = "1";
                audio.play();
            });
        });

        ecl_pdf.addEventListener('click', function() {
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
          /*
            document.getElementById('ecl').data = "pdfs/cae.pdf";
            ecl_pdf_div.style.zIndex = "1000";
            ecl_pdf_div.style.display = "block";
            ecl_pdf_quit_div.style.display = "block";
            ecl_pdf_sendmail_div.style.display = "block";
            ecl_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key16.html";
            });
            ecl_pdf_quit_img.addEventListener('click', function() {
                ecl_pdf_div.style.display = "none";
                ecl_pdf_div.style.zIndex = "0";
            });
           */
           coming.style.height = "10%";
           coming.style.width = "8%";
           coming.style.top = "4%";
           coming.style.right = "19%";
           coming.style.display = "block";
 

        });

        ecl_ppt.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('ecl').data = "ppts/ECL_latest.pdf";
            ecl_pdf_div.style.zIndex = "1000";
            ecl_pdf_div.style.display = "block";
            ecl_pdf_quit_div.style.display = "block";
            ecl_pdf_sendmail_div.style.display = "none";
            ecl_pdf_quit_img.addEventListener('click', function() {
                ecl_pdf_div.style.display = "none";
                ecl_pdf_div.style.zIndex = "0";
            });
        });
    });

//PTE
    pte_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "block";
        pte_ops2.style.display = "block";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        pte_ops_text.style.display = "block";
        pte_ops2_text.style.display = "block";

        pte_vid.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/PTE.mp4";
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

        pte_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            document.getElementById('pte').data = "pdfs/pte.pdf";
            pte_pdf_div.style.zIndex = "1000";
            pte_pdf_div.style.display = "block";
            pte_pdf_quit_div.style.display = "block";
            pte_pdf_sendmail_div.style.display = "block";
            pte_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key15.html";
            });
            pte_pdf_quit_img.addEventListener('click', function() {
                pte_pdf_div.style.display = "none";
                pte_pdf_div.style.zIndex = "0";
            });
        });

        pte_pdf2.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            document.getElementById('pte').data = "pdfs/vtb.pdf";
            pte_pdf_div.style.zIndex = "1000";
            pte_pdf_div.style.display = "block";
            pte_pdf_quit_div.style.display = "block";
            pte_pdf_sendmail_div.style.display = "block";
            pte_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key28.html";
            });
            pte_pdf_quit_img.addEventListener('click', function() {
                pte_pdf_div.style.display = "none";
                pte_pdf_div.style.zIndex = "0";
            });
        });

        pte_ppt.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('pte').data = "ppts/PTE_latest.pdf";
            pte_pdf_div.style.zIndex = "1000";
            pte_pdf_div.style.display = "block";
            pte_pdf_quit_div.style.display = "block";
            pte_pdf_sendmail_div.style.display = "none";
            pte_pdf_quit_img.addEventListener('click', function() {
                pte_pdf_div.style.display = "none";
                pte_pdf_div.style.zIndex = "0";
            });
        });
    });

//shl
    shl_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "block";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";
        
        shl_vid.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
         
            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/SHL.mp4";
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
        

        shl_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            document.getElementById('shl').data = "pdfs/shl.pdf";
            shl_pdf_div.style.zIndex = "1000";
            shl_pdf_div.style.display = "block";
            shl_pdf_quit_div.style.display = "block";
            shl_pdf_sendmail_div.style.display = "block";
            shl_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key12.html";
            });
            shl_pdf_quit_img.addEventListener('click', function() {
                shl_pdf_div.style.display = "none";
                shl_pdf_div.style.zIndex = "0";
            });
        });

        shl_ppt.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('shl').data = "ppts/SHL.pdf";
            shl_pdf_div.style.zIndex = "1000";
            shl_pdf_div.style.display = "block";
            shl_pdf_quit_div.style.display = "block";
            shl_pdf_sendmail_div.style.display = "none";
            shl_pdf_quit_img.addEventListener('click', function() {
                shl_pdf_div.style.display = "none";
                shl_pdf_div.style.zIndex = "0";
            });
        });
    });



//psl
    psl_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "block";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";

        psl_vid.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
            var vc = document.getElementById('video_container');
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
                audio.play();
                vid.pause();
            });
            vid.addEventListener('ended', function() {
                location.href = "fid.html";
                vc.style.zIndex = "1";
                audio.play();
            });
        });

        psl_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            document.getElementById('psl').data = "pdfs/psl.pdf";
            psl_pdf_div.style.zIndex = "1000";
            psl_pdf_div.style.display = "block";
            psl_pdf_quit_div.style.display = "block";
            psl_pdf_sendmail_div.style.display = "block";
            psl_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key13.html";
            });
            psl_pdf_quit_img.addEventListener('click', function() {
                psl_pdf_div.style.display = "none";
                psl_pdf_div.style.zIndex = "0";
            });
        });

        psl_ppt.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('psl').data = "ppts/PSL_latest.pdf";
            psl_pdf_div.style.zIndex = "1000";
            psl_pdf_div.style.display = "block";
            psl_pdf_quit_div.style.display = "block";
            psl_pdf_sendmail_div.style.display = "none";
            psl_pdf_quit_img.addEventListener('click', function() {
                psl_pdf_div.style.display = "none";
                psl_pdf_div.style.zIndex = "0";
            });
        });
    });


//nvh
    nvh_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "block";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";

        nvh_vid.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
          
            var vc = document.getElementById('video_container');
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
                audio.play();
                vid.pause();
            });
            vid.addEventListener('ended', function() {
                location.href = "fid.html";
                vc.style.zIndex = "1";
                audio.play();
            });
           
        });
        

        nvh_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            document.getElementById('nvh').data = "pdfs/nvh.pdf";
            nvh_pdf_div.style.zIndex = "1000";
            nvh_pdf_div.style.display = "block";
            nvh_pdf_quit_div.style.display = "block";
            nvh_pdf_sendmail_div.style.display = "block";
            nvh_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key18.html";
            });
            nvh_pdf_quit_img.addEventListener('click', function() {
                nvh_pdf_div.style.display = "none";
                nvh_pdf_div.style.zIndex = "0";
            });
        });

        nvh_ppt.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('nvh').data = "ppts/NVH_latest.pdf";
            nvh_pdf_div.style.zIndex = "1000";
            nvh_pdf_div.style.display = "block";
            nvh_pdf_quit_div.style.display = "block";
            nvh_pdf_sendmail_div.style.display = "none";
            nvh_pdf_quit_img.addEventListener('click', function() {
                nvh_pdf_div.style.display = "none";
                nvh_pdf_div.style.zIndex = "0";
            });
        }); 
    });


//vel
    vel_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "block";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";

        vel_vid.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/VEL.mp4";
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

        vel_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            document.getElementById('vel').data = "pdfs/vel.pdf";
            vel_pdf_div.style.zIndex = "1000";
            vel_pdf_div.style.display = "block";
            vel_pdf_quit_div.style.display = "block";
            vel_pdf_sendmail_div.style.display = "block";
            vel_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key10.html";
            });
            vel_pdf_quit_img.addEventListener('click', function() {
                vel_pdf_div.style.display = "none";
                vel_pdf_div.style.zIndex = "0";
            });
        });

        vel_ppt.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('vel').data = "ppts/VEL_latest.pdf";
            vel_pdf_div.style.zIndex = "1000";
            vel_pdf_div.style.display = "block";
            vel_pdf_quit_div.style.display = "block";
            vel_pdf_sendmail_div.style.display = "none";
            vel_pdf_quit_img.addEventListener('click', function() {
                vel_pdf_div.style.display = "none";
                vel_pdf_div.style.zIndex = "0";
            });
        });
    });

//sdl
    sdl_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "block";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";

        sdl_vid.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
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
                audio.play();
                vid.pause();
            });
            vid.addEventListener('ended', function() {
                location.href = "fid.html";
                vc.style.zIndex = "1";
                audio.play();
            });
        });

        sdl_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            document.getElementById('sdl').data = "pdfs/sdl.pdf";
            sdl_pdf_div.style.zIndex = "1000";
            sdl_pdf_div.style.display = "block";
            sdl_pdf_quit_div.style.display = "block";
            sdl_pdf_sendmail_div.style.display = "block";
            sdl_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key11.html";
            });
            sdl_pdf_quit_img.addEventListener('click', function() {
                sdl_pdf_div.style.display = "none";
                sdl_pdf_div.style.zIndex = "0";
            });
        });

        sdl_ppt.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('sdl').data = "ppts/SDL.pdf";
            sdl_pdf_div.style.zIndex = "1000";
            sdl_pdf_div.style.display = "block";
            sdl_pdf_quit_div.style.display = "block";
            sdl_pdf_sendmail_div.style.display = "none";
            sdl_pdf_quit_img.addEventListener('click', function() {
                sdl_pdf_div.style.display = "none";
                sdl_pdf_div.style.zIndex = "0";
            });
        });
    });

//cal
    cal_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "block";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";

        cal_vid.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/CAL.mp4";
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

        cal_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            document.getElementById('cal').data = "pdfs/cal.pdf";
            cal_pdf_div.style.zIndex = "1000";
            cal_pdf_div.style.display = "block";
            cal_pdf_quit_div.style.display = "block";
            cal_pdf_sendmail_div.style.display = "block";
            cal_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key21.html";
            });
            cal_pdf_quit_img.addEventListener('click', function() {
                cal_pdf_div.style.display = "none";
                cal_pdf_div.style.zIndex = "0";
            });
        });

        cal_ppt.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('cal').data = "ppts/CAL_latest.pdf";
            cal_pdf_div.style.zIndex = "1000";
            cal_pdf_div.style.display = "block";
            cal_pdf_quit_div.style.display = "block";
            cal_pdf_sendmail_div.style.display = "none";
            cal_pdf_quit_img.addEventListener('click', function() {
                cal_pdf_div.style.display = "none";
                cal_pdf_div.style.zIndex = "0";
            });
        });
    });

//aed
    aed_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "block";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";

        aed_vid.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/AED.mp4";
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

        aed_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            document.getElementById('aed').data = "pdfs/aed.pdf";
            aed_pdf_div.style.zIndex = "1000";
            aed_pdf_div.style.display = "block";
            aed_pdf_quit_div.style.display = "block";
            aed_pdf_sendmail_div.style.display = "block";
            aed_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key25.html";
            });
            aed_pdf_quit_img.addEventListener('click', function() {
                aed_pdf_div.style.display = "none";
                aed_pdf_div.style.zIndex = "0";
            });
        });

        aed_ppt.addEventListener('click', function() {
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('aed').data = "ppts/AED_latest.pdf";
            aed_pdf_div.style.zIndex = "1000";
            aed_pdf_div.style.display = "block";
            aed_pdf_quit_div.style.display = "block";
            aed_pdf_sendmail_div.style.display = "none";
            aed_pdf_quit_img.addEventListener('click', function() {
                aed_pdf_div.style.display = "none";
                aed_pdf_div.style.zIndex = "0";
            });
            /*
            coming.style.display = "block";
            coming.style.height = "10%";
            coming.style.width = "8%";
            coming.style.top = "31%";
            coming.style.right = "12%";
            */
        });
    });

//aml -- Removed in Dec 2018
    /*
    aml_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        aml_ops.style.display = "block";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";

        aml_vid.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
          
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
                audio.play();
                vid.pause();
            });
            vid.addEventListener('ended', function() {
                location.href = "fid.html";
                vc.style.zIndex = "1";
                audio.play();
            });
            
        });

        aml_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            document.getElementById('aml').data = "pdfs/aml.pdf";
            aml_pdf_div.style.zIndex = "1000";
            aml_pdf_div.style.display = "block";
            aml_pdf_quit_div.style.display = "block";
            aml_pdf_sendmail_div.style.display = "block";
            aml_pdf_quit_img.addEventListener('click', function() {
                aml_pdf_div.style.display = "none";
                aml_pdf_div.style.zIndex = "0";
            });
        });

        aml_ppt.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('aml').data = "ppts/AML.pdf";
            aml_pdf_div.style.zIndex = "1000";
            aml_pdf_div.style.display = "block";
            aml_pdf_quit_div.style.display = "block";
            aml_pdf_sendmail_div.style.display = "none";
            aml_pdf_quit_img.addEventListener('click', function() {
                aml_pdf_div.style.display = "none";
                aml_pdf_div.style.zIndex = "0";
            });
        });
    });
*/

//impc
    impc_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "block";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";

        impc_vid.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
          
            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/IMPC.mp4";
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
        impc_pdf.addEventListener('click', function() {
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            
            document.getElementById('impc').data = "pdfs/cae.pdf";
            impc_pdf_div.style.zIndex = "1000";
            impc_pdf_div.style.display = "block";
            impc_pdf_quit_div.style.display = "block";
            impc_pdf_sendmail_div.style.display = "block";
            impc_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key24.html";
            });
            impc_pdf_quit_img.addEventListener('click', function() {
                impc_pdf_div.style.display = "none";
                impc_pdf_div.style.zIndex = "0";
            });
            
            
            coming.style.right = "19%";
            coming.style.top = "27%";
            coming.style.height = "10%";
            coming.style.width = "8%";
            coming.style.display = "block";
        });
        */
        

        
        impc_ppt.addEventListener('click', function() {
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('impc').data = "ppts/IMPC_latest.pdf";
            impc_pdf_div.style.zIndex = "1000";
            impc_pdf_div.style.display = "block";
            impc_pdf_quit_div.style.display = "block";
            impc_pdf_sendmail_div.style.display = "none";
            impc_pdf_quit_img.addEventListener('click', function() {
                impc_pdf_div.style.display = "none";
                impc_pdf_div.style.zIndex = "0";
            });
            /*
            coming.style.right = "17%";
            coming.style.top = "25%";
            coming.style.height = "10%";
            coming.style.width = "8%";
            coming.style.display = "block";
            */
        });
        
    });

//bdcp
      /*
    bdcp_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        bdcp_ops.style.display = "block";
        aca_ops.style.display = "none";
        do_ops.style.display = "none";

        hmr_ops.style.display = "none";
        bdcp_vid.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
          
            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/corporate.mp4";
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
            

            coming.style.display = "block";
        });

        bdcp_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            
            document.getElementById('bdcp').data = "pdfs/bdcp.pdf";
            bdcp_pdf_div.style.zIndex = "1000";
            bdcp_pdf_div.style.display = "block";
            bdcp_pdf_quit_div.style.display = "block";
            bdcp_pdf_quit_img.addEventListener('click', function() {
                bdcp_pdf_div.style.display = "none";
                bdcp_pdf_div.style.zIndex = "0";
            });
            
        });

        bdcp_ppt.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('bdcp').data = "ppts/BDCP.pdf";
            bdcp_pdf_div.style.zIndex = "1000";
            bdcp_pdf_div.style.display = "block";
            bdcp_pdf_quit_div.style.display = "block";
            bdcp_pdf_quit_img.addEventListener('click', function() {
                bdcp_pdf_div.style.display = "none";
                bdcp_pdf_div.style.zIndex = "0";
            });
        });
    });
   */

//aca
    /*
    aca_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        aml_ops.style.display = "none";
        impc_ops.style.display = "none";
       // bdcp_ops.style.display = "none";
        aca_ops.style.display = "block";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";

        aca_vid.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
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
                audio.play();
                vid.pause();
            });
            vid.addEventListener('ended', function() {
                location.href = "fid.html";
                vc.style.zIndex = "1";
                audio.play();
            });
        });

        aca_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            document.getElementById('aca').data = "pdfs/aca.pdf";
            aca_pdf_div.style.zIndex = "1000";
            aca_pdf_div.style.display = "block";
            aca_pdf_quit_div.style.display = "block";
            aca_pdf_quit_img.addEventListener('click', function() {
                aca_pdf_div.style.display = "none";
                aca_pdf_div.style.zIndex = "0";
            });
        });

        aca_ppt.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('aca').data = "ppts/academy.pdf";
            aca_pdf_div.style.zIndex = "1000";
            aca_pdf_div.style.display = "block";
            aca_pdf_quit_div.style.display = "block";
            aca_pdf_quit_img.addEventListener('click', function() {
                aca_pdf_div.style.display = "none";
                aca_pdf_div.style.zIndex = "0";
            });
        });
    });
    */

//do
    do_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "block";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";

        do_vid.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
         
            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/corporate.mp4";
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
 
        do_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            document.getElementById('do').data = "pdfs/do.pdf";
            do_pdf_div.style.zIndex = "1000";
            do_pdf_div.style.display = "block";
            do_pdf_quit_div.style.display = "block";
            do_pdf_sendmail_div.style.display = "block";
            do_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key22.html";
            });
            do_pdf_quit_img.addEventListener('click', function() {
                do_pdf_div.style.display = "none";
                do_pdf_div.style.zIndex = "0";
            });
        });

        do_ppt.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('do').data = "ppts/BDCP_latest.pdf";
            do_pdf_div.style.zIndex = "1000";
            do_pdf_div.style.display = "block";
            do_pdf_quit_div.style.display = "block";
            do_pdf_sendmail_div.style.display = "none";
            do_pdf_quit_img.addEventListener('click', function() {
                do_pdf_div.style.display = "none";
                do_pdf_div.style.zIndex = "0";
            });
        });
    });

//hmr
    hmr_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "block";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";

        hmr_vid.addEventListener('click', function() {
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        /*
        document.getElementById('coming_soon').style.display = 'none';

            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/corporate.mp4";
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
         */
            coming.style.right = "13%";
            coming.style.top = "32%";
            coming.style.height = "10%";
            coming.style.width = "8%";
            coming.style.display = "block";


        });
        hmr_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            document.getElementById('hmr').data = "pdfs/hmr.pdf";
            hmr_pdf_div.style.zIndex = "1000";
            hmr_pdf_div.style.display = "block";
            hmr_pdf_quit_div.style.display = "block";
            hmr_pdf_sendmail_div.style.display = "block";
            hmr_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key26.html";
            });
            hmr_pdf_quit_img.addEventListener('click', function() {
                hmr_pdf_div.style.display = "none";
                hmr_pdf_div.style.zIndex = "0";
            });
        });

        hmr_ppt.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('hmr').data = "ppts/HMR_latest.pdf";
            hmr_pdf_div.style.zIndex = "1000";
            hmr_pdf_div.style.display = "block";
            hmr_pdf_quit_div.style.display = "block";
            hmr_pdf_sendmail_div.style.display = "none";
            hmr_pdf_quit_img.addEventListener('click', function() {
                hmr_pdf_div.style.display = "none";
                hmr_pdf_div.style.zIndex = "0";
            });
        });
    });


//cmc
    cmc_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "block";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";

        cmc_vid.addEventListener('click', function() {
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        /*
        document.getElementById('coming_soon').style.display = 'none';

            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/corporate.mp4";
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
         */
            coming.style.right = "81%";
            coming.style.top = "28%";
            coming.style.height = "10%";
            coming.style.width = "8%";
            coming.style.display = "block";


        });
        cmc_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
			
            document.getElementById('cmc').data = "pdfs/cmc.pdf";
            cmc_pdf_div.style.zIndex = "1000";
            cmc_pdf_div.style.display = "block";
            cmc_pdf_quit_div.style.display = "block";
            cmc_pdf_sendmail_div.style.display = "block";
            cmc_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key14.html";
            });
            cmc_pdf_quit_img.addEventListener('click', function() {
                cmc_pdf_div.style.display = "none";
                cmc_pdf_div.style.zIndex = "0";
            });
			/*
            coming.style.right = "66%";
            coming.style.top = "32%";
            coming.style.height = "10%";
            coming.style.width = "8%";
            coming.style.display = "block";
            */
        });

        cmc_ppt.addEventListener('click', function() {
        //document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
			/*
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('cmc').data = "ppts/HMR.pdf";
            cmc_pdf_div.style.zIndex = "1000";
            cmc_pdf_div.style.display = "block";
            cmc_pdf_quit_div.style.display = "block";
            cmc_pdf_sendmail_div.style.display = "none";
            cmc_pdf_quit_img.addEventListener('click', function() {
                cmc_pdf_div.style.display = "none";
                cmc_pdf_div.style.zIndex = "0";
            });
			*/
            coming.style.right = "66%";
            coming.style.top = "27%";
            coming.style.height = "10%";
            coming.style.width = "8%";
            coming.style.display = "block";
        });
    });

//pmd
    pmd_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "block";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";

        pmd_vid.addEventListener('click', function() {
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        /*
        document.getElementById('coming_soon').style.display = 'none';

            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/corporate.mp4";
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
         */
            coming.style.right = "62%";
            coming.style.top = "32%";
            coming.style.height = "10%";
            coming.style.width = "8%";
            coming.style.display = "block";


        });
        pmd_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
			
            document.getElementById('pmd').data = "pdfs/pmd.pdf";
            pmd_pdf_div.style.zIndex = "1000";
            pmd_pdf_div.style.display = "block";
            pmd_pdf_quit_div.style.display = "block";
            pmd_pdf_sendmail_div.style.display = "block";
            pmd_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key19.html";
            });
            pmd_pdf_quit_img.addEventListener('click', function() {
                pmd_pdf_div.style.display = "none";
                pmd_pdf_div.style.zIndex = "0";
            });
            
            /*
			coming.style.right = "47%";
            coming.style.top = "27%";
            coming.style.height = "10%";
            coming.style.width = "8%";
            coming.style.display = "block";
            */
        });

        pmd_ppt.addEventListener('click', function() {
        //document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
			/*
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('pmd').data = "ppts/HMR.pdf";
            pmd_pdf_div.style.zIndex = "1000";
            pmd_pdf_div.style.display = "block";
            pmd_pdf_quit_div.style.display = "block";
            pmd_pdf_sendmail_div.style.display = "none";
            pmd_pdf_quit_img.addEventListener('click', function() {
                pmd_pdf_div.style.display = "none";
                pmd_pdf_div.style.zIndex = "0";
            });
			*/
	        coming.style.right = "50%";
            coming.style.top = "26%";
            coming.style.height = "10%";
            coming.style.width = "8%";
            coming.style.display = "block";
        });
    });


//met
    met_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "block";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";

        met_vid.addEventListener('click', function() {
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        /*
        document.getElementById('coming_soon').style.display = 'none';

            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/corporate.mp4";
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
         */
            coming.style.right = "50%";
            coming.style.top = "23%";
            coming.style.height = "10%";
            coming.style.width = "8%";
            coming.style.display = "block";


        });
        met_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
			
            document.getElementById('met').data = "pdfs/met.pdf";
            met_pdf_div.style.zIndex = "1000";
            met_pdf_div.style.display = "block";
            met_pdf_quit_div.style.display = "block";
            met_pdf_sendmail_div.style.display = "block";
            met_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key20.html";
            });
            met_pdf_quit_img.addEventListener('click', function() {
                met_pdf_div.style.display = "none";
                met_pdf_div.style.zIndex = "0";
            });
            
            /*
			coming.style.right = "47%";
            coming.style.top = "27%";
            coming.style.height = "10%";
            coming.style.width = "8%";
            coming.style.display = "block";
            */
        });

        met_ppt.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
			
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('pmd').data = "ppts/MET_latest.pdf";
            pmd_pdf_div.style.zIndex = "1000";
            pmd_pdf_div.style.display = "block";
            pmd_pdf_quit_div.style.display = "block";
            met_pdf_sendmail_div.style.display = "none";
            pmd_pdf_quit_img.addEventListener('click', function() {
                pmd_pdf_div.style.display = "none";
                pmd_pdf_div.style.zIndex = "0";
            });
			/*
	        coming.style.right = "45%";
            coming.style.top = "23%";
            coming.style.height = "10%";
            coming.style.width = "8%";
            coming.style.display = "block";
            */
        });
    });


//tg - Technology group
    tg_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "block";
        erl_ops.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";

        tg_vid.addEventListener('click', function() {
            document.getElementById('video_container').style.display = 'none';
            vid.pause();
            audio.play();
            /*
            document.getElementById('coming_soon').style.display = 'none';
            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/PTE.mp4";
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
            */
            coming.style.right = "26%";
            coming.style.top = "40%";
            coming.style.height = "10%";
            coming.style.width = "8%";
            coming.style.display = "block";
        });

        tg_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            document.getElementById('tg').data = "pdfs/technology_group.pdf";
            tg_pdf_div.style.zIndex = "1000";
            tg_pdf_div.style.display = "block";
            tg_pdf_quit_div.style.display = "block";
            tg_pdf_sendmail_div.style.display = "block";
            tg_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key27.html";
            });
            tg_pdf_quit_img.addEventListener('click', function() {
                tg_pdf_div.style.display = "none";
                tg_pdf_div.style.zIndex = "0";
            });
        });

        tg_ppt.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('tg').data = "ppts/TG_latest.pdf";
            tg_pdf_div.style.zIndex = "1000";
            tg_pdf_div.style.display = "block";
            tg_pdf_quit_div.style.display = "block";
            tg_pdf_sendmail_div.style.display = "none";
            tg_pdf_quit_img.addEventListener('click', function() {
                tg_pdf_div.style.display = "none";
                tg_pdf_div.style.zIndex = "0";
            });
        });
    });

//erl
    erl_btn.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "block";

        erl_vid.addEventListener('click', function() {
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
        /*
        document.getElementById('coming_soon').style.display = 'none';

            var vc = document.getElementById('video_container');
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/corporate.mp4";
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
         */
            coming.style.right = "30%";
            coming.style.top = "25%";
            coming.style.height = "10%";
            coming.style.width = "8%";
            coming.style.display = "block";


        });
        erl_pdf.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();

			
            document.getElementById('erl').data = "pdfs/erl.pdf";
            erl_pdf_div.style.zIndex = "1000";
            erl_pdf_div.style.display = "block";
            erl_pdf_quit_div.style.display = "block";
            erl_pdf_sendmail_div.style.display = "block";
            erl_pdf_sendmail_img.addEventListener('click', function() {
                location.href = "key23.html";
            });
            erl_pdf_quit_img.addEventListener('click', function() {
                erl_pdf_div.style.display = "none";
                erl_pdf_div.style.zIndex = "0";
            });
               
            /*
			coming.style.right = "27%";
            coming.style.top = "25%";
            coming.style.height = "10%";
            coming.style.width = "8%";
            coming.style.display = "block";
            */
        });

        erl_ppt.addEventListener('click', function() {
        document.getElementById('coming_soon').style.display = 'none';
        document.getElementById('video_container').style.display = 'none';
        vid.pause();
        audio.play();
			
            //swfobject.embedSWF("cal.swf", "container", "100%", "100%", "9.0.0");
            document.getElementById('erl').data = "ppts/ERL_latest.pdf";
            erl_pdf_div.style.zIndex = "1000";
            erl_pdf_div.style.display = "block";
            erl_pdf_quit_div.style.display = "block";
            erl_pdf_sendmail_div.style.display = "none";
            erl_pdf_quit_img.addEventListener('click', function() {
                erl_pdf_div.style.display = "none";
                erl_pdf_div.style.zIndex = "0";
            });
			/*
	        coming.style.right = "24%";
            coming.style.top = "25%";
            coming.style.height = "10%";
            coming.style.width = "8%";
            coming.style.display = "block";
            */
        });
    });

    background.addEventListener('click', function(){
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        coming.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";
    });

    gal2_btn.addEventListener('click', function() {
        cae_ops.style.display = "none";
        ecl_ops.style.display = "none";
        pte_ops.style.display = "none";
        pte_ops2.style.display = "none";
        shl_ops.style.display = "none";
        psl_ops.style.display = "none";
        nvh_ops.style.display = "none";
        vel_ops.style.display = "none";
        sdl_ops.style.display = "none";
        //gal1_ops.style.display = "none";
        cal_ops.style.display = "none";
        aed_ops.style.display = "none";
        //aml_ops.style.display = "none";
        impc_ops.style.display = "none";
        //bdcp_ops.style.display = "none";
        //aca_ops.style.display = "none";
        do_ops.style.display = "none";
        hmr_ops.style.display = "none";
        cmc_ops.style.display = "none";
        pmd_ops.style.display = "none";
        met_ops.style.display = "none";
        tg_ops.style.display = "none";
        erl_ops.style.display = "none";
        pte_ops_text.style.display = "none";
        pte_ops2_text.style.display = "none";
        coming.style.display = "none";
        document.getElementById('coming_soon').style.display = 'none';
         
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

    
    gal1_btn.addEventListener('click', function() {
        location.href = 'gal1.html';
    });
    
    
    home_btn.addEventListener('click', function() {
        location.href = "home.html";
    });
