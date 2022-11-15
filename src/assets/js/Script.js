window.onload = () => {
  const CLICK_FLOU = document.querySelectorAll(".click_flou");
  const CONTENUE = document.querySelector(".contenue");
  CLICK_FLOU.forEach((FLOU) => {
      FLOU.addEventListener("click", async() => {
          CONTENUE.classList.add("flou");
    });
  });
};
