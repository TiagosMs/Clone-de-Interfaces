function atualizarsaldo(){
   var novosaldo = prompt('Saldo: ');
   var saldo = document.getElementById('saldoh2');

   if (novosaldo !== null){ //verifica se o user clicou em "Cancelar"
        saldo.innerText = 'R$' + novosaldo + ',00';
   }
}