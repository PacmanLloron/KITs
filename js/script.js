function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

let contador = 0;

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var targetElement = event.target;
  let palabraArrastrada = document.getElementById(data);
  let palabraId = palabraArrastrada.id;
  let palabraCaja = targetElement.getAttribute("data-tarjeta-id");
  

  // console.log(palabraCaja.length)

  if (targetElement.classList.contains("caja_madre") ) {
    if (targetElement.children.length > 1){
        return;
        // || targetElement.classList.contains("contendor_cajas")
    }
    else if (palabraId != palabraCaja){
      
      alert("¡Ey!, Revisa tu Respuesta")
      return;

    }
    targetElement.appendChild(document.getElementById(data));
    contador = contador+1;
    console.log(contador)
  }
  if (contador === 8) {
    setTimeout(function() {
      alert("¡Enhorabuena!, ¡has terminado! ¡FELICIDADES!");
    }, 1000);
    setTimeout(function(){ 
      window.location.href="../index.html"
    },1500);
  }
}
