//global variables

const addCurrencyBtn = document.querySelector(".add-currency-btn");
const addCurrencyList = document.querySelector(".add-currency-list");
const currencies = [
  {
    name: "US Dollar",
    abbreviation: "USD",
    symbol: "\u0024",
    flagURL: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png",
  }
];


// Event Listeners

addCurrencyBtn.addEventListener("click", addCurrencyBtnClick);

function addCurrencyBtnClick(event) {
  addCurrencyBtn.classList.toggle("open");
}

// Auxillary Functions

function populateAddCurrencyList() {
  for ( var i = 0; i < currencies.length; i++) {
    addCurrencyList.insertAdjacentHTML(
      'beforeend', '<li data-currency="MXN"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1920px-Flag_of_Mexico.svg.png" class="flag"><span>JPY - Japanese Yen</span></li>'
    );
  }
}

populateAddCurrencyList();
