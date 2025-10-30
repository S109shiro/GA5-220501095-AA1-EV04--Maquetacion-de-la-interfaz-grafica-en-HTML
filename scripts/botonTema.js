function cambiarTema(){
    let claseOscura = document.documentElement.classList.contains("tema-oscuro");
    let boton = document.getElementById("boton-tema");
    
    if(claseOscura){
        document.documentElement.classList.remove('tema-oscuro');
        boton.innerText = "Modo Oscuro 🌙"
    }
    else{
        document.documentElement.classList.add('tema-oscuro'); 
        boton.innerText = "Modo Claro ☀️";
    }
}

