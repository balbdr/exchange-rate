const fromAmountElement =document.querySelector('.amount');
const convertedAmountElement =document.querySelector('.convertedAmount');
const fromCurrencyElement =document.querySelector('.fromCurrency');
const toCurrencyElement =document.querySelector('.toCurrency');
const resultElement =document.querySelector('.result');
const converterContainer =document.querySelector('.converter-container');
const dateElement =document.querySelector('.date');
const date = new Date();
dateElement.textContent = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
function updateTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let period = "";

    if (hour >= 12) {
      period = "PM";
    } else {
      period = "AM";
    }

    if (hour == 0) {
      hour = 12;
    } else {
      if (hour > 12) {
        hour = hour - 12;
      }
    }

    hour = update(hour);
    minute = update(minute);
    second = update(second);

    document.querySelector(".clock").innerText = hour + " : " + minute + " : " + second + " " + period;
    setTimeout(updateTime, 1000);
  }

  function update(t) {
    if (t < 10) {
      return "0" + t;
    } else {
      return t;
    }
  }

  updateTime();


const countries = [
  {code: "USD", name : "United States Dollar"},
  {code:  "NPR", name: "Nepalese Rupee"},
  {code:  "AFN", name: "Afghan Afghani"},
  {code:  "AMD", name: "Armenian Dram"},
  {code:  "AUD", name: "Australian Dollar"},
 {code:  "EUR", name: " Austria European euro "},
 {code:  "ALL", name: " Albanian Lek"},
  {code: "DZD", name: "Algerian Dinar"},
 {code:   "ARS", name: "Argentine Peso"},
  {code:  "AZN", name: "Azerbaijani Manat"},
 {code:  "BAM", name: "Bosnia-Herzegovina Convertible Mark"},
 {code:  "BHD", name: "Bahraini Dinar"},
 {code:  "BBD", name: "Barbadian Dollar"},
  {code:  "BDT", name: "Bangladeshi Taka"},
 {code:  "EUR", name: " Belgium European euro "},
 {code:  "XOF", name: " Benin CFA franc "},
 {code:  "BMD", name: " Bermudian dollar "},
 {code:  "BTN", name: " Bhutanese Ngultrum "},
 {code:  "BWP", name: " Botswana pula "},
  {code:  "BND", name: "Brunei Dollar"},
  {code:  "BRL", name: "Brazilian Real"},
  {code:  "BZD", name: "Belize Dollar"},
 {code:  "BOB", name: "Bolivian Boliviano"},
  {code: "BYN", name: "Belarusian Ruble"},
 {code:  "GBP", name: "British Pound Sterling"},
 {code:  "XOF", name: " Burkina Faso CFA franc "},
 {code:  "BIF", name: " Burundi franc "},
 {code:  "BGN", name: "Bulgarian Lev"},
 {code:  "EUR", name: " Bulgaria European euro "},
  {code:  "CAD", name: "Canadian Dollar"},
 {code:  "CVE", name: " Cabo Verdean escudo "},
 {code:  "XAF", name: " Cameroon CFA franc "},
  {code:  "CLP", name: "Chilean Peso"},
  {code:  "CNY", name: "Chinese Yuan"},
  {code:  "COP", name: "Colombian Peso"},
 {code:  "KMF", name: " Comorian franc "},
 {code:  "KHR", name: "Cambodian Riel"},
 {code:  "CZK", name: "Czech Koruna"},
 {code:  "EUR", name: " Croatia European euro "},
 {code:  "CUP", name: "Cuban Peso"},
 {code:  "EUR", name: " Cyprus European euro "},
 {code:  "CDF", name: "Congolese Franc"},
 {code:  "CRC", name: "Costa Rica Colon"},
 {code:  "HRK", name: "Croatian Kuna"},  {code:  "DKK", name: "Danish Krone"},
 {code:  "DJF", name: " Djiboutian franc "},
 {code:  "XCD", name: " Dominica C. dollar "},
 {code:  "DOP", name: "Dominican Peso"},
 {code: "EGP", name: "Egyptian Pound"},
 {code: "USD", name: " El Salvador U S dollar "},
 {code: "EUR", name: " Estonia European euro "},
 {code: "ETB", name: "Ethiopion Birr"},
 {code: "SZL", name: " Eswatini Swazi lilangeni "},
 {code: "ERN", name: "Eritrean nakfa"},
 {code: "FKP", name: " Falkland Islands pound "},
 {code: "FJD", name: "Fiji Dollar"},
 {code: "EUR", name: " Finland European euro "},
 {code: "EUR", name: " France European euro "}, 
 {code: "XAF", name: " GabanCentral African Franc"},
 {code:  "GEL", name: "Georgian Lari"},
 {code: "GHS", name: "Ghanaian Cedi"},
 {code: "GMD", name: "Gambian Dalasi"},
 {code: "EUR", name: " Germany European euro "},
 {code: "EUR", name: " Greece  European euro "},
 {code: "DKK", name: " Greenland Danish krone "},
 {code: "XCD", name: " Grenada  Caribbean dollar "},
 {code: "XOF", name: " Guinea-Bissau CFA franc "},
 {code: "GTQ", name: " Guatemala Quetzal"},
 {code: "GYD", name: "Guyana Dollar"}, 
 {code: "HUF", name: "Hungarian Forint"},  
 {code:  "HKD", name: "Hong Kong Dollar"},
 {code:  "HTG", name: "Haitian Gourde"},
 {code:  "HNL", name: "Honduras Lempira"},
 {code: "INR", name: "Indian Rupee"},
 {code: "IRR", name: "Iran Rial"},
 {code: "IQD", name: "Iraqi Dinar"},
 {code: "ISK", name: "Icelandic Krona"},
 {code:  "ILS", name: "Israeli New Shekel"},
 {code:  "IDR", name: "Indonesian Rupiah"},
 {code:  "EUR", name: " Ireland European euro "},
 {code:  "EUR", name: " Italy	European euro "},
 {code:  "JPY", name: "Japanese Yen"},
 {code:  "JMD", name: "Jamaican Dollar"},
 {code:  "JOD", name: "Jordanian Dinar"},
 {code:  "JEP", name: " Jersey 	Jersey pound "},
 {code:  "KZT", name: "Kazakhstani Tenge"},
 {code:  "AUD", name: " Kiribati Australian dollar "},
 {code:  "KES", name: "Kenyan Shilling"},
 {code:  "KWD", name: "Kuwaiti Dinar"},
 { code:  "EUR", name: " Kosovo European euro "},
 {code:  "KGS", name: "Kyrgyzstan Som"},
 {code:  "LAK", name: " Laos Lao Kip"},
 {code:  "EUR", name: " Latvia	European euro "},
 {code:  "LBP", name: "Lebanese Pound"},
 {code:  "LSL", name: " Lesotho Lesotho loti "},
 {code:  "LRD", name: " Liberia Liberian dollar "},
 {code:  "LYD", name: " Libyan dinar "},
 {code:  "CHF", name: "  Liechtenstein	 Swiss franc "},
 {code:  "EUR", name: " Lithuania European euro "},
 {code:  "EUR", name: " Luxembourg	European euro  "},
 {code:  "MKD", name: "Macedonian Denar"},
 {code:  "MOP", name: " Macau Macanese pataca "},
 {code:  "MGA", name: " Madagascar	Malagasy ariary "},
 {code:  "XOF", name: " Mali CFA franc "},
 {code:  "EUR", name: " Malta	European euro  "},
 {code:  "USD", name: " Marshall Islands U S dollar  "},
 {code:  "MUR", name: "Mauritian Rupee"},
 {code:  "MRO", name: "Mauritania Ougulya"},
 {code:  "MVR", name: "Maldivian Rufiyaa"},
 {code:  "MYR", name: "Malaysian Ringgit"},
 {code:  "MWK", name: "Malawi Kwacha"},
 {code:  "MOP", name: "Macau Pataca"},
 {code:  "MGA", name: "Malagasy Ariary"},
 {code:  "MXN", name: "Mexican Peso"},
 {code:  "USD", name: " Micronesia US dollar "},
 {code: "MNT", name: "Mongolian Tugrik"},
 {code:  "MAD", name: "Moroccan Dirham"},
 {code:  "MDL", name: "Moldovan Leu"},
 {code:  "EUR", name: " Monaco European Euro "},
 {code:  "EUR", name: " Montenegro European Euro "},
 {code:  "MZN", name: "Mozambican Metical"},
 {code:  "MMK", name: "Myanmar Kyat"},
 {code:  "NAD", name: "Namibian Dollar"},
 {code:  "AUD", name: " Nauru Australian dollar "},
 {code:  "NGN", name: "Nigerian Naira"},
 {code:  "NPR", name: "Nepalese Rupee"},
 {code:  "NOK", name: "Norwegian Krone"},
 {code:  "EUR", name: " Netherlands	European euro "},
 {code:  "NIO", name: "Nicaragua Cordoba"},
 {code:  "XOF", name: " Niger African CFA franc "},
 {code:  "KPW", name: "North Korean Won"},
 {code:  "MKD", name: "North Macedonian denar "},
 {code:  "NZD", name: "New Zealand Dollar"},
 {code:  "OMR", name: "Omani Rial"},
 {code: "PKR", name: "Pakistani Rupee"},
 {code: "ILS", name: " Palestine  new shekel "},
 {code: "USD", name: " Palau	U S dollar "},
 {code: "USD", name: " Panama U S dollar "},
 {code:  "PEN", name: "Peruvian Sol"},
 {code:  "PHP", name: "Philippine Peso"},
 {code:  "PLN", name: "Polish Zloty"},
 {code: "EUR", name: " Portugal European euro "},
 {code:  "PGK", name: "Papua New Guinea Kina"},
 {code:  "PYG", name: "Paraguayan Guarani"},
 {code:  "QAR", name: "Qatari Riyal"},
 {code: "RUB", name: "Russian Ruble"},
 {code: "RWF", name: "Rwanda Franc"},
 {code:  "RON", name: "Romanian Leu"},
 {code:  "USD", name: " Saba United States dollar "},
 {code:  "EUR", name: " Saint Barthelemy European euro "},
 {code:  "SHP", name: " Saint Helena pound "},
 {code:  "XCD", name: " Saint Kitts East Caribbean dollar "},
 {code:  "XCD", name: " Saint Lucia East Caribbean dollar  "},
 {code:  "WST", name: " Samoa Samoan tala  "},
 {code:  "EUR", name: " San Marino	European euro  "},
 {code:  "STN", name: " Sao Tome and Principe dobra  "},
 {code:  "XOF", name: "Saudi Riyal"},
 {code:  "RSD", name: "Serbian Dinar"},
 {code:  "SAR", name: " Senegal West African CFA franc "},
 {code:  "SLE", name: " Sierra Leonean leone "},
 {code: "SGD", name: "Singapore Dollar"},
 {code: "USD", name: " Sint Eustatius USD "},
 {code:  "SCR", name: "Seychellois Rupee"},
 {code:  "LKR", name: "Sri Lankan Rupee"},
 {code:  "SEK", name: "Swedish Krona"},
 {code:  "EUR", name: " Slovakia European euro "},
 {code:  "EUR", name: " Slovenia European euro "},
 {code:  "ZAR", name: " South African rand "},
 {code:  "KRW", name: "South Korean Won"},
 {code:  "SSP", name: " South Sudanese pound "},
 {code:  "EUR", name: " Spain	European euro  "},
 {code:  "SYP", name: "Syrian Pound"},
 {code:  "SOS", name: "Somali Shilling"},
 {code:  "SBD", name: "Soloman island Dollar"},
 {code:  "SLL", name: "Sierra Leone leone"},
 {code: "ZAR", name: "South African Rand"},
 {code:  "SDG", name: "Sudanese Pound"},
 {code:  "CHF", name: "Swiss Franc"},
 {code:  "SZL", name: "Swaziland Lilageni"},
 {code:  "SRD", name: "Surinamese Dollar"},
 {code: "THB", name: "Thai Baht"},
 {code: "TWD", name: "Taiwan Dollar"},
 {code: "TND", name: "Tunisian Dinar"},
 {code: "TJS", name: "Tajikistani somoni"},
 {code: "USD", name: "Timor-Leste  USD"},
 {code: "XOF", name: "Togo West African CFA franc "},
 {code: "TOP", name: "Tonga	Tongan paanga  "},
 {code: "AUD", name: "Tuvalu Australian dollar  "},
 {code: "USD", name: "Turks and Caicos Islands (UK)  "},
  {code: "TMT", name: "Turkmenistan manat"},
  {code:  "TRY", name: "Turkish Lira"},
  {code:  "TTD", name: "Trinidad and Tobago Dollar"},
  {code:  "TZS", name: "Tanzanian Shilling"},
  {code:  "UAH", name: "Ukrainian Hryvnia"},
  {code:  "UGX", name: "Ugandan Shilling"},
 {code:   "AED", name: "United Arab Emirates Dirham"},
 {code:  "GBP", name: " United Kingdom Pound sterling "},
 {code:  "UZS", name: "Uzbekistani Som"},
 {code:  "UYU", name: "Uruguayan New peso"},
 {code:  "USD", name: "US Virgin Islands USD"},
  {code:  "VND", name: "Vietnamese Dong"},
 {code:  "VUV", name: " Vanuatu Vatu"},
 {code:  "EUR", name: " Vatican City Euro "},
 {code:  "VES", name: " Venezuelan Bolivar "},
 {code:  "XPF", name: " Wallis and Futuna CFP franc"},
  {code:  "XOF", name: "West African CFA Franc"},
 {code:  "YER", name: "Yemeni Rial"},
 {code:  "ZMW", name: "Zambian Kwacha"},
 {code:  "ZWG", name: " Zimbabwe gold "},
 
  ];
//showing countries  from array to select tag
countries.forEach(country => {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');

    option1.value = option2.value = country.code;

   option1.textContent = option2.textContent =  `${country.code} (${country.name})`;


    fromCurrencyElement.appendChild(option1);
    toCurrencyElement.appendChild(option2);
//setting defult value USD to NPR
fromCurrencyElement.value = 'USD';
toCurrencyElement.value = 'NPR';   
    
    
});
//get exchange rate using API
const getExchangeRate =async() => {
    const  amount = parseFloat(fromAmountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;
   // resultElement.textContent = "Faching  Exchangr Rate...";

    try{
    //fetching data from API
    const  response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();

    const exchangeRate = data.rates[toCurrency];
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    if(typeof conversionRate !== 'undefined'){
        resultElement.textContent = "Error: Unable to fetch exchange rate for" ;
        convertedAmountElement.value = "";
    }
    else{
        convertedAmountElement.value = convertedAmount;
        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;

    }

    
    
    

   
}catch (error){
    converterContainer.innerHTML = `<h2 class="error">Error: ${error.message}!! फेला परेन​!!!1​</h2>`;
}
}
    
    

  

//faching  exchange rate when user input amount
fromAmountElement.addEventListener('input', getExchangeRate);
fromCurrencyElement.addEventListener('change', getExchangeRate);
toCurrencyElement.addEventListener('change', getExchangeRate);
window.addEventListener('load', getExchangeRate);

/*
function changecolor(){
    let  red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
  
    const randomColor = `rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor = randomColor;
  }
  changecolor();
  */