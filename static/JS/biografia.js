let btnMenu = document.getElementById('btn-menu')
let nav = document.getElementById('articulo-nav')
let redes = document.getElementById('redes')
let text = document.getElementById('text')
let img = document.getElementById('img')
let validacion = false
let tam = window.innerWidth

redes.style.display = 'none'
nav.style.display = 'none'

btnMenu.addEventListener('click', function(){
    validacion = !validacion
    if(validacion){
        img.style.display = 'none'
        text.style.display = 'none'
        btnMenu.innerHTML = 'close'
        redes.style.display = 'flex'
        nav.style.display = 'flex'
        nav.classList.add = 'articulo'
    }else{
        img.style.display = 'block'
        text.style.display = 'flex'
        btnMenu.innerHTML = 'menu'
        redes.style.display = 'none'
        nav.classList.remove = 'articulo'
        nav.style.display = 'none'
    }
})