// Obtém o botão usando seu ID
var botao = document.getElementById("meuBotao");

// Adiciona um ouvinte de evento para o clique do botão
botao.addEventListener("click", function() {
  // Altera o texto do botão quando clicado
  botao.textContent = "Apertou!";
});

