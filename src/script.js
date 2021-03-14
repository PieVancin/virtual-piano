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
    } else {
        console.log(`Invalid key.`);
    }
})