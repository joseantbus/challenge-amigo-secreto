// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = [];

function agregarAmigo() {
   let amigo = document.getElementById('amigo').value;
   if (amigo == '') {
      alert('Por favor ingrese un nombre valido');
   } else {
      lista.push(amigo);
      document.getElementById('amigo').value = '';
      console.log(lista);
   }
   return;
}

function listaAmigos() {
   let listaAmigo = document.getElementById('listaAmigos');
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
   if (lista.length === 0) {
      alert('Debe introducir el nombre de sus amigos para realizar el sorteo');
   } else {
      let indiceAleatorio = Math.floor(Math.random() * lista.length);
      let nuevoElemento = document.createElement('li');
      nuevoElemento.textContent = `Su amigo secreto es ${lista[indiceAleatorio]}`;
      amigoSorteado.appendChild(nuevoElemento);
   }
}
