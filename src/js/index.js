const botoes = document.querySelectorAll(".botao");

const dinossauros = document.querySelectorAll(".dinossauros");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    const botaoselecionado = document.querySelector(".botao.selecionado");

    botaoselecionado.classList.remove("selecionado");
    botao.classList.add("selecionado");

    const dinossaurosselecionado = document.querySelector(
      ".dinossauros.selecionado"
    );

    dinossaurosselecionado.classList.remove("selecionado");

    dinossauros[indice].classList.add("selecionado");

    console.log(indice);
    console.log(dinossauros[indice]);
  });
});
