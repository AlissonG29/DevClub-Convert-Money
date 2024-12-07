const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector("currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); // Valor em Real
  const currencyValueConverted = document.querySelector(".currency-value"); // Outras Moedas

  console.log(currencySelect.value);

  const dolarToday = 6.09;
  const euroToday = 6.44;
  const libraToday = 7.76;
  const bitcoinToday = 609.855;

  if (currencySelect.value == "dolar") {
    // Se o select estiver selecionado o valor de dolar, entre aqui.
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  if (currencySelect.value == "euro") {
    // Se o select estiver selecionado o valor de euro, entre aqui.
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).fotmat(inputCurrencyValue / euroToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  console.log(convertedValue);
}

convertButton.addEventListener("click", convertValues);
