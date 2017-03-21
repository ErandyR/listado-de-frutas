function agregarFruta(){
  var frutaAgregar = document.getElementById("frutita").value;
  if(frutaAgregar.length > 0){
    if(find_li(frutaAgregar)){
      var li = document.createElement('li');
      li.id = frutaAgregar;
      li.innerHTML = frutaAgregar;
      document.getElementById("agregandoFruta").appendChild(li);
    }
  }
  return false;
}

function find_li(contenido){
  var fruit = document.getElementById("agregandoFruta").getElementsByTagName("li");
  for (var i = 0; i < fruit.length; i++){
    if(fruit[i].innerHTML == contenido)
    return false;
  }
  return true;
}
