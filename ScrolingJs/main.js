let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let lune = document.querySelector('.lune');


window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 2 + 'px';
    lune.style.fontSize = value + 'px';
    if(value >= 67){
        lune.style.fontSize = 67 + 'px';
        lune.style.position = 'fixed';
        if(value >= 478){
            lune.style.display = 'none';
        }else{
            lune.style.display = 'block';
        }
        if(value >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#79a2bf, #10001f)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #aa8ec1)';
        }
    }
}