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
        btnMenu.classList.remove('fa-bars') 
        btnMenu.classList.add('fa-x') 
        redes.style.display = 'flex'
        nav.style.display = 'flex'
        nav.classList.add = 'articulo'
    }else{
        galeria.style.display = 'flex'
        btnMenu.classList.remove('fa-x')
        btnMenu.classList.add('fa-bars')
        redes.style.display = 'none'
        nav.classList.remove = 'articulo'
        nav.style.display = 'none'
    }
})