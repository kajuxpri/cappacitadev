function retornaLista (lista) {
var listaClientes = [];
for (var i = 0; i < lista.length; i++) {
if (lista[i].idade>18 && lista[i].idade<26) {
listaClientes.push(lista[i]);
}
}
return listaClientes;
}
