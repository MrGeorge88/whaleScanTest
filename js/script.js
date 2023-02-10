var btn = document.querySelector("button");
var price = document.querySelector("span");
var updTime = document.querySelector("#updTime");
var disclaimer = document.querySelector("#disclaimer");
var currency = document.querySelector("#currency");
var symbol = currency.value;
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

function getPrice (){
  var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  var currency = document.querySelector("#currency");
  var symbol = currency.value;
  fetch(url)
    .then(function(response){
    return response.json();
  })
    .then(function(data){
    var rate = data.bpi[symbol].rate;
    rate = rate.substring(0, rate.indexOf(".")); // elimina todo después del punto decimal
    price.innerHTML = data.bpi[symbol].symbol + rate;
    updTime.innerHTML = new Date().toLocaleString();
    disclaimer.innerText = data.disclaimer;
  });
}

getPrice();

btn.addEventListener("click", function(){
  getPrice()
});
