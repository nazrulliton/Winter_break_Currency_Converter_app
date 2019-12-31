//global variables

const addCurrencyBtn = document.querySelector(".add-currency-btn");
const addcurrencyList = document.querySelector(".add-curency-list");
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

function populateAddCyrrencyList() {
  for (let i=0; i<currencies.length; i++){
    addCurrencyList.insertAdjacentHTML("beforeend",
    `<li data-currency="USD" class="disabled">
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png" class="flag"><span>USD - US Dollar</span>
    </li>`
  );
  }
}

populateAddCyrrencyList();
