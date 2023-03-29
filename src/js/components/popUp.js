import axios from 'axios';

export const popUp = () => ({
  isOpened: false,
  amount: 25,
  intAmount: 0,
  currency: "UAH",
  currencySign: "₴",
  decimalAmount: ".00",
  isOpenedSelect: false,
  lang: "ua",

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.changeCurrency(this.lang);
    });
  },

  changeLang(lang) {
    this.lang = lang;
    this.changeCurrency(this.lang);
  },

  toggleSelect() {
    if (this.isOpenedSelect) {
      return this.closeSelect();
    }
    this.$refs.button.focus();
    this.isOpenedSelect = true;
  },

  closeSelect(focusAfter) {
    if (!this.isOpenedSelect) return;
    this.isOpenedSelect = false;
    focusAfter && focusAfter.focus();
  },

  formatAmount(amount) {
    this.setIntAmount(amount);
    this.setDecimalAmount(amount);
  },

  setIntAmount(amount) {
    this.intAmount = Math.floor(amount);
  },

  setDecimalAmount(amount) {
    this.decimalAmount = `.${amount.toFixed(2).split(".")[1]}`;
  },

  onChangeCurrencySelect(el) {
    const currencyName = el.dataset.currencyName;
    this.changeCurrency(currencyName);
  },

  changeCurrency(currency) {
    switch (currency) {
      case "en":
        this.currency = "USD";
        this.currencySign = "$";
        break;
      case "gb":
        this.currency = "GBP";
        this.currencySign = "£";
        break;
      case "ua":
        this.currency = "UAH";
        this.currencySign = "₴";
        break;
      case "es":
        this.currency = "EUR";
        this.currencySign = "€";
        break;
      case "pl":
        this.currency = "PLN";
        this.currencySign = "zł";
        break;
      case "de":
        this.currency = "EUR";
        this.currencySign = "€";
        break;
      case "it":
        this.currency = "EUR";
        this.currencySign = "€";
        break;
      case "fr":
        this.currency = "EUR";
        this.currencySign = "€";
        break;
      case "cz":
        this.currency = "CZK";
        this.currencySign = "Kč";
        break;
      case "ro":
        this.currency = "RON";
        this.currencySign = "L";
        break;
      case "sk":
        this.currency = "EUR";
        this.currencySign = "€";
        break;
      case "hr":
        this.currency = "EUR";
        this.currencySign = "€";
        break;
      case "hu":
        this.currency = "HUF";
        this.currencySign = "Ft";
        break;
      case "be":
        this.currency = "EUR";
        this.currencySign = "€";
        break;
      case "nl":
        this.currency = "EUR";
        this.currencySign = "€";
        break;
      case "rs":
        this.currency = "RSD";
        this.currencySign = "din";
        break;
      case "pt":
        this.currency = "EUR";
        this.currencySign = "€";
        break;
      default:
        this.currency = "USD";
        this.currencySign = "$";
        break;
    }
  },
  clearInput() {
    const inputAmount = document.querySelector(".input-amount");
    let inputAmountValue = inputAmount.value;

    if (+inputAmountValue && +inputAmountValue > 0) {
      inputAmount.value = "";
    }
  },
  onSelectAmountBtn(el) {
    const parentEl = el.parentElement;
    const activeEl = parentEl.querySelector(".amount-btn--active");

    if (el === activeEl) return;
    if (activeEl) {
      activeEl.classList.remove("amount-btn--active");
    }
    el.classList.add("amount-btn--active");
    const btnValue = el.dataset.amountValue;

    if (+btnValue) {
      this.amount = +btnValue;
    }

    this.clearInput();
  },
  onInputAmount(el) {
    const amountBtns = document.querySelector(".amount-btns");
    const activeBtn = amountBtns.querySelector(".amount-btn--active");
    const elValue = el.value;
    if (activeBtn) {
      activeBtn.classList.remove("amount-btn--active");
    }
    if (elValue && +elValue) {
      this.amount = +elValue;
    } else {
      this.amount = 0;
    }
  },
  getFilteredLang(lang) {
    switch (lang) {
      case "ua":
        return "uk";
      case "es":
        return "es";
      case "pt":
        return "pt";
      default:
        return "en";
    }
  },
  sendRequest() {
    if (!this.amount || +this.amount === 0) {
      return;
    }
    const lang = "ua";
    const thankText = "Дякуємо за участь у нашій кампанії зі збору коштів для громадської організації Superhumans Center, що займається протезуванням українців, поранених внаслідок війни. Superhumans отримають 100% вашої пожертви.";

    axios({
      method: "post",
      url: "https://mastercard.superhumans.com/api/payment",
      data: {
        currency: this.currency,
        amount: this.amount * 100,
        lang: lang,
        thankText: thankText,
        urlLang: this.lang
      },
    })
      .then(function (response) {
        console.log(response);

        window.location.href = response.data.url;
      })
      .then(function (error) {
        console.log(error.message);
      });

    this.clearInput();
  },
  open() {
    this.isOpened = true;
    document.body.classList.add("overflow-hidden");
  },
  close() {
    this.isOpened = false;
    document.body.classList.remove("overflow-hidden");
  },
});
