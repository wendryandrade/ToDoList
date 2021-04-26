//Adiciona um novo item na lista
function newElement() 
{
  var lista = document.createElement("li");
  var texto = document.getElementById("textoTarefa").value;
  var t = document.createTextNode(texto);

  lista.appendChild(t);

  if (texto == '') 
    alert("Escreva o nome da tarefa!");
  
  else 
    document.getElementById("minhaLista").appendChild(lista);

  document.getElementById("textoTarefa").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  
  span.className = "exclui";

  span.appendChild(txt);
  lista.appendChild(span);

  for (i = 0; i < exclui.length; i++) 
  {
      exclui[i].onclick = function() 
      {
        var div = this.parentElement;
        div.style.display = "none";
      }
  }
}


//Cria o botão para excluir cada um dos itens da lista
var myNodelist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length; i++) 
{
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  
  span.className = "exclui";
  
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


//Exclui o item da lista
var exclui = document.getElementsByClassName("exclui");
var i;

for (i = 0; i < exclui.length; i++) 
{
    exclui[i].onclick = function() 
    {
      var div = this.parentElement;
      div.style.display = "none";
    }
}


//Marca a tarefa como completa ao clicar no item da lista
var list = document.querySelector('ul');

list.addEventListener('click', function(ev) 
{
  if (ev.target.tagName === 'LI') 
    ev.target.classList.toggle('feito');
}, false);
