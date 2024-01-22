let btnMenu = document.getElementById('btn-menu')
let video = document.getElementById('video')
let nav = document.getElementById('articulo-nav')
let redes = document.getElementById('redes')

let validacion = false
let tam = window.innerWidth
if(tam < 600){
    redes.style.display = 'none'
}
nav.style.display = 'none'

btnMenu.addEventListener('click', function(){
    validacion = !validacion
    if(validacion){
        btnMenu.innerHTML = 'close'
        redes.style.display = 'flex'
        nav.style.display = 'flex'
        nav.classList.add = 'articulo'
        video.style.display = 'none'
    }else{
        btnMenu.innerHTML = 'menu'
        redes.style.display = 'none'
        nav.classList.remove = 'articulo'
        nav.style.display = 'none'
        video.style.display = 'flex'
    }
})