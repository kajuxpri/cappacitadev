function retornaPar(num){ if (num % 2 == 0){ return num } }  var numerosAleatorios = [12, 47, 66, 35, 142, 71, 14, 6]  var filtrado = numerosAleatorios.filter(retornaPar)  console.log(filtrado)
