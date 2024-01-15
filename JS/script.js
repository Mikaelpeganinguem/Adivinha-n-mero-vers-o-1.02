let numeroEscolhido = Math.floor(Math.random() * 100) + 1;
let tentativas = 5;

function confirm() {
    let numero = "";
    numero = numeroEscolhido;

    let chute = parseInt(document.getElementById("chute").value);
    let resposta = document.getElementById("resposta");
    let chances = document.getElementById("tentativas");
    
    if(chute === ""){
       resposta.innerText = "Digite um numero";
       
    }else if(chute < 0 && chute > 100){
       resposta.innerText = "Digite um número válido entre 0 e 100"
    }
    
    
    if(chute > numero && tentativas != 1){
       resposta.innerText = "O número que você digitou é MAIOR que o número que eu escolhi"
         
       tentativas--;
       chances.innerText = tentativas;
       
    }else if(chute < numero && tentativas != 1){
       resposta.innerText = "O número que você digitou é MENOR que o número que eu escolhi"
         
       tentativas--;
       chances.innerText = tentativas;
         
    }else if(chute === numero && tentativas != 0){
       resposta.innerText = "PARABÉNS! Você acertou"
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
         resposta.innerText = "PARABÉNS! Você acertou"
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
