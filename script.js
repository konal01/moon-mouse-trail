const trailer = document.getElementById("trailer");
const text = document.getElementById('text');
window.onmousemove = e =>{

    const x = e.clientX - trailer.offsetWidth/2,
          y = e.clientY - trailer.offsetHeight/2;

    const keyframes = {
        transform: `translate(${x}px , ${y}px)`};


trailer.animate(keyframes,{
    duration : 900, 
    fill:"forwards"
});
}





