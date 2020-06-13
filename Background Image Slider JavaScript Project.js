//Hızlı çağrılan fonksiyon ibaresi
(() => {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4",
  ]; //Resimlerin isimlerini bir dizin halde yazdık
  //sol ve sağ butonları seçme ve addEventListener ekleme
  const buttons = document.querySelectorAll(".btn");
  const imageDIV = document.querySelector(".img-container");
  let counter = 0;
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (button.classList.contains("btn-left")) {
        counter--;
        if (counter < 0) {
          counter = pictures.length - 1;
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`; //url'in tırnağına dikkat.
      }
      if (button.classList.contains("btn-right")) {
        counter++;
        if (counter > pictures.length - 1) {
          counter = 0;
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`;
      }
    });
  });
})();
