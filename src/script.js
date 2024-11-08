function setBackgroundImage1() {
    let div = document.getElementById("imageDiv");
    div.classList.remove("bg-image-2", "bg-image-3");
    div.classList.add("bg-image-1");
  }

  function setBackgroundImage2() {
    const div = document.getElementById("imageDiv");
    div.classList.remove("bg-image-1", "bg-image-3");
    div.classList.add("bg-image-2");
  }

function setBackgroundImage3() {

  const div = document.getElementById("imageDiv");
  div.classList.remove("bg-image-2" , "bg-image-1");
  div.classList.add("bg-image-3");

}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove a classe de fundo verde de todos os botões
    buttons.forEach((btn) => btn.classList.remove("bg-green-500"));

    // Adiciona a classe de fundo verde ao botão clicado
    button.classList.add("bg-green-500");
  });
});