let btnMenu = document.getElementById('btn-menu')
let nav = document.getElementById('articulo-nav')
let redes = document.getElementById('redes')
let galeria = document.getElementById('galeria')
let validacion = false

redes.style.display = 'none'
nav.style.display = 'none'

btnMenu.addEventListener('click', function(){
    validacion = !validacion
    if(validacion){
        galeria.style.display = 'none'
        btnMenu.innerHTML = 'close'
        redes.style.display = 'flex'
        nav.style.display = 'flex'
        nav.classList.add = 'articulo'
    }else{
        galeria.style.display = 'flex'
        btnMenu.innerHTML = 'menu'
        redes.style.display = 'none'
        nav.classList.remove = 'articulo'
        nav.style.display = 'none'
    }
})