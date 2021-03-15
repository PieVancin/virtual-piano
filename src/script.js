document.addEventListener("keydown", function(event){
    if (event.code === 'KeyA') {
        let a = new Audio("audio/A.mp3");
        a.play();
    }  else if (event.code === 'KeyS') {
        let s = new Audio("audio/S.mp3");
        s.play();
    } else if (event.code === 'KeyD') {
        let d = new Audio("audio/D.mp3");
        d.play();
    } else if (event.code === 'KeyF') {
        let f = new Audio("audio/F.mp3");
        f.play();
    } else if (event.code === 'KeyG') {
        let g = new Audio("audio/G.mp3");
        g.play();
    } else if (event.code === 'KeyH') {
        let h = new Audio("audio/H.mp3");
        h.play();
    } else if (event.code === 'KeyJ') {
        let j = new Audio("audio/J.mp3");
        j.play();
    } else if (event.code === 'KeyW') {
        let w = new Audio("audio/W.mp3");
        w.play();
    } else if (event.code === 'KeyE') {
        let e = new Audio("audio/E.mp3");
        e.play();
    } else if (event.code === 'KeyT') {
        let t = new Audio("audio/T.mp3");
        t.play();
    } else if (event.code === 'KeyY') {
        let y = new Audio("audio/Y.mp3");
        y.play();
    } else if (event.code === 'KeyU') {
        let u = new Audio("audio/U.mp3");
        u.play();
    }  else {
        console.log(`Invalid key.`);
    }
})