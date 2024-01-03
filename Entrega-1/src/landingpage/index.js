const cardscontainer = document.querySelector(".cardsContainer");
// const botonCarrito = document.querySelector(".carrito");

const cardsTemplate = (cards) => {
  return `<div class="card">
    <img src="${cards.cardImg}" alt="" />
    <div class="cardsInfo">
      <div class="cardsText">
        <h2>${cards.name}</h2>
        <p>Precio: ${cards.precio}</p>
      </div>
      <button>+</button>
    </div>
  </div>`;
};

const renderCards = (cardsList) => {
  cardscontainer.innerHTML += cardsList.map(cardsTemplate).join("");
};

const init = () => {
  renderCards(cardsData);
};

init();
