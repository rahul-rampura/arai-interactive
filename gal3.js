
    var audio = document.getElementById('a');

    //Buttons
    var at = document.getElementById('at');
    var ct = document.getElementById('ct');
    var ds = document.getElementById('ds');
    var flda = document.getElementById('flda');
    var fptc = document.getElementById('fptc');
    var tptb = document.getElementById('tptb');
    var via = document.getElementById('via');
    var vlt = document.getElementById('vlt');
    var vt = document.getElementById('vt');
    var st = document.getElementById('st');
    var fptd = document.getElementById('fptd');
    var fptt = document.getElementById('fptt');
    var mt = document.getElementById('mt');
    var rvia = document.getElementById('rvia');
    var mat = document.getElementById('mat');
    var fptto = document.getElementById('fptto');
    var lt = document.getElementById('lt');
    var pgt = document.getElementById('pgt');
    var mast = document.getElementById('mast');
    var drp = document.getElementById('drp');
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

    //Embedding video
    var v = document.createElement('video');
    v.id = "vid";
    v.muted = "muted";
    v.loop = "loop";
    v.style.width = "100%";


    var back = document.getElementById('back');
  

    ds.addEventListener('click', function() {

            document.getElementById('v_container').style.display = "none";
            
            ds.style.opacity = "1";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";
            var vc = document.getElementById('video_container');

            vc.style.height="20%";
            vc.style.width="25%";
            vc.style.top="5%";
            vc.style.left="25%";

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/ds1.mp4";
            vc.appendChild(vid);
            audio.pause();
            vid.play();
            vid.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

            var vc2 = document.getElementById('video2_container');

            vc2.style.height="17%";
            vc2.style.width="20%";
            vc2.style.top="45%";
            vc2.style.left="51%";

            vc2.style.display = 'block';
            vc2.style.zIndex = "1000";
            vid2.src = "vid/ds2.mp4";
            vc2.appendChild(vid2);
            audio.pause();
            vid2.play();
            vid2.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc2.style.zIndex = "1";
                audio.play();
            });


            var vc3 = document.getElementById('video3_container');

            vc3.style.height="20%";
            vc3.style.width="22%";
            vc3.style.top="14%";
            vc3.style.left="68.5%";

            vc3.style.display = 'block';
            vc3.style.zIndex = "1000";
            vid3.src = "vid/ds3.mp4";
            vc3.appendChild(vid3);
            audio.pause();
            vid3.play();
            vid.addEventListener('ended', function() {
                location.href = "fid.html";
                vc.style.zIndex = "1";
                audio.play();
            });


    });

    rvia.addEventListener('click', function() {
            ds.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            rvia.style.opacity = "1";
            fptt.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('v_container').style.display = "none";

            document.getElementById('video2_container').style.display = "none";
            var vc = document.getElementById('video_container');
           
            vc.style.height="25%";
            vc.style.width="27%";
            vc.style.top="18%";
            vc.style.left="25%";
            
            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/rvia1.mp4";
            vc.appendChild(vid);
            audio.pause();
            vid.play();
            vid.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

            var vc3 = document.getElementById('video3_container');
            vc3.style.height="25%";
            vc3.style.width="27%";
            vc3.style.top="30%";
            vc3.style.left="67.5%";
            vc3.style.display = 'block';
            vc3.style.zIndex = "1000";
            vid3.src = "vid/rvia2.mp4";
            vc3.appendChild(vid3);
            audio.pause();
            vid3.play();
            vid3.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc3.style.zIndex = "1";
                audio.play();
            });
    });

    via.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            via.style.opacity = "1";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            fptto.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('v_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";

            var vc = document.getElementById('video_container');

            vc.style.height="25%";
            vc.style.width="27%";
            vc.style.top="18%";
            vc.style.left="25%";

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            vid.src = "vid/via1.mp4";
            vc.appendChild(vid);
            audio.pause();
            vid.play();
            vid.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

            var vc3 = document.getElementById('video3_container');
            vc3.style.height="25%";
            vc3.style.width="27%";
            vc3.style.top="30%";
            vc3.style.left="67.5%";
            vc3.style.display = 'block';
            vc3.style.zIndex = "1000";
            vid3.src = "vid/via2.mp4";
            vc3.appendChild(vid3);
            audio.pause();
            vid3.play();
            vid3.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc3.style.zIndex = "1";
                audio.play();
            });
    });

    at.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "1";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            fptto.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/at.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });


    ct.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "1";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            fptto.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/ct.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });

    flda.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "1";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            fptto.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/flda.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });


    fptc.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "1";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            fptto.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/fptc.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });

    rhw.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "1";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptto.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/rhw.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });

    tptb.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "1";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/tptb.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });

    vlt.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "1";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            fptto.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/vlt.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });

    vt.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "1";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            fptto.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/vt.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });


    st.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "1";
            fptd.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            fptto.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/st.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });


    fptd.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "1";
            fptt.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            fptto.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/fptd.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });


    fptt.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptt.style.opacity = "1";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            fptto.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/fptt.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });


    mt.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            mt.style.opacity = "1";
            mat.style.opacity = "0.5";
            fptto.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/mt.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });


    mat.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "1";
            fptto.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/mat.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });


    fptto.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            fptto.style.opacity = "1";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/fptto.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });


    lt.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptto.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            lt.style.opacity = "1";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/lt.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });


    pgt.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptto.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "1";
            mast.style.opacity = "0.5";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/pgt.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });

    mast.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptto.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "1";
            frv.style.opacity = "0.5";
            drp.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/mast.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });

    frv.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptto.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            frv.style.opacity = "1";
            drp.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/frv.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });


    drp.addEventListener('click', function() {

            ds.style.opacity = "0.5";
            rvia.style.opacity = "0.5";
            via.style.opacity = "0.5";
            at.style.opacity = "0.5";
            ct.style.opacity = "0.5";
            flda.style.opacity = "0.5";
            fptc.style.opacity = "0.5";
            rhw.style.opacity = "0.5";
            tptb.style.opacity = "0.5";
            vlt.style.opacity = "0.5";
            vt.style.opacity = "0.5";
            st.style.opacity = "0.5";
            fptd.style.opacity = "0.5";
            fptto.style.opacity = "0.5";
            mt.style.opacity = "0.5";
            mat.style.opacity = "0.5";
            fptt.style.opacity = "0.5";
            lt.style.opacity = "0.5";
            pgt.style.opacity = "0.5";
            mast.style.opacity = "0.5";
            drp.style.opacity = "1";
            frv.style.opacity = "0.5";

            document.getElementById('video_container').style.display = "none";
            document.getElementById('video2_container').style.display = "none";
            document.getElementById('video3_container').style.display = "none";

            var vc = document.getElementById('v_container');

            vc.style.display = 'block';
            vc.style.zIndex = "1000";
            v.src = "vid/drp.mp4";
            vc.appendChild(v);
            audio.pause();
            v.play();
            v.addEventListener('ended', function() {
                location.href = "gal2.html";
                vc.style.zIndex = "1";
                audio.play();
            });

    });


    back.addEventListener('click', function() {
        location.href = "fid.html";
    });



