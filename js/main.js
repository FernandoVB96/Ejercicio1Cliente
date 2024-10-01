
    // Posicionarnos en el elemento #contenedorCartas
    const contenedorCartas = document.querySelector("#contenedorCartas");
    
    // 1) Su primer hijo
    const primerHijo = contenedorCartas.firstElementChild;
    console.log(primerHijo);
    
    // 2) Su tercer hijo
    const tercerHijo = contenedorCartas.children[2];
    console.log(tercerHijo);
    
    // 3) El siguiente hermano del tercer hijo
    const siguienteHermanoTercerHijo = tercerHijo.nextElementSibling;
    console.log(siguienteHermanoTercerHijo);
    
    // 4) Su último hijo
    const ultimoHijo = contenedorCartas.lastElementChild;
    console.log(ultimoHijo);
    
    // 5) Su padre
    const padre = contenedorCartas.parentElement;
    console.log(padre);
    
    // 6) El padre del padre
    const padreDelPadre = contenedorCartas.parentElement.parentElement;
    console.log(padreDelPadre);
    
    // 7) Su hermano anterior 
    const hermanoAnterior = contenedorCartas.previousElementSibling;
    console.log(hermanoAnterior);
    
    // 8) Las clases del último hijo
    const clasesUltimoHijo = ultimoHijo.classList;
    console.log(clasesUltimoHijo);
