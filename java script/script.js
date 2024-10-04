const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const dolar = 5.53;
const euro = 6.05;
const Bitcoin = 332206.11;

const convertValues = () => {
    const inputreais = document.getElementById("input-real").value;
    const valor_em_real = document.getElementById("real-value-text");
    const currency_value_text = document.getElementById("currency_value_text");

    valor_em_real.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputreais);

    if (select.value === "US$ Dolar Americano") {
        currency_value_text.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputreais / dolar);
    } else if (select.value === "€ Euro") {
        currency_value_text.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputreais / euro);
    } else if (select.value === "Bitcoin") {
        currency_value_text.innerHTML = inputreais / Bitcoin;
    }
};

//-----

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.getElementById("currency-Img");

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "../assets/img/euro01.png";
    } else if (select.value === "US$ Dolar Americano") {
        currencyName.innerHTML = "Dolar Americano";
        currencyImg.src = "../assets/img/USA.png";
    } else if (select.value === "Bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImg.src = "../assets/img/Bitcoin.png";
    }

    convertValues();
};

button.addEventListener("click", convertValues); //evento de click
select.addEventListener("change", changeCurrency);
