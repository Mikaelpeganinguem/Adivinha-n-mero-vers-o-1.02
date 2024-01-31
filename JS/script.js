let numeroEscolhido = Math.floor(Math.random() * 100) + 1;
let tentativas = 5;

function confirm() {
    let numero = "";
    numero = numeroEscolhido;

    let chute = parseInt(document.getElementById("chute").value);
    let resposta = document.getElementById("resposta");
    let chances = document.getElementById("tentativas");
    
    if(chute > numero && tentativas != 1){
       resposta.innerText = "Seu número é MAIOR que o meu"
         
       tentativas--;
       chances.innerText = tentativas;
       document.getElementById("chute").value = ''
       
    }else if(chute < numero && tentativas != 1){
       resposta.innerText = "Seu número é MENOR que o meu"
         
       tentativas--;
       chances.innerText = tentativas;
       document.getElementById("chute").value = ''
       
    }else if(chute === numero && tentativas != 0){
       resposta.innerText = `PARABÉNS! Você acertou o número é ${numero}`
       let denovo = document.getElementById('denovo');
       
       denovo.style.display = 'block'
       document.getElementById("chute").value = "";
         
   }else if(tentativas == 1){
      if(chute != numero){
         chances.innerText = 0;
         resposta.innerText = `Você perdeu ;( O número correto era ${numero}`
          
         let denovo = document.getElementById('denovo');
         denovo.style.display = 'block'
      }else{
         resposta.innerText = `PARABÉNS! Você acertou o número é ${numero}`
         let denovo = document.getElementById('denovo');
       
         denovo.style.display = 'block'
         document.getElementById("chute").value = "";
      }
   }
}

/* Função de recarregar a página */

function refresh(){
  location.reload();
}
