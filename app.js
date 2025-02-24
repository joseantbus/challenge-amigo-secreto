let lista = [];

function agregarAmigo() {
   let amigo = document.getElementById('amigo').value;
   //En la siguiente linea validaremos que no se deje vacio el espacio del nombre
   if (amigo == '') {
      alert('Por favor ingrese un nombre valido');
      // El siguiente bloque de codigo es el encargado de mandar cada nombre a nuestra array lista
   } else {
      lista.push(amigo);
      document.getElementById('amigo').value = '';
      console.log(lista);
   }
   return;
}

//Esta funcion es la encargada de mostrar cada nombre en la lista de nuestro html
function listaAmigos() {
   let listaAmigo = document.getElementById('listaAmigos');
   //Esta linea borra el nombre para no tener nombres repetidos en la lista que se muestra al usuario
   listaAmigo.innerHTML = '';
   for (let i = 0; i < lista.length; i++) {
      let amigos = lista[i];
      let nuevoElemento = document.createElement('li');
      nuevoElemento.textContent = `${amigos}`;
      listaAmigo.appendChild(nuevoElemento);
   }
}

function sortearAmigo() {
   let amigoSorteado = document.getElementById('resultado');
   //Este bloque if nos ayuda a validar que la lista no este vacia para poder realizar el sorteo
   if (lista.length === 0) {
      alert('Debe introducir el nombre de sus amigos para realizar el sorteo');
   } else {
      let indiceAleatorio = Math.floor(Math.random() * lista.length);
      let nuevoElemento = document.createElement('li');
      nuevoElemento.textContent = `Su amigo secreto es ${lista[indiceAleatorio]}`;
      amigoSorteado.appendChild(nuevoElemento);
   }
}
