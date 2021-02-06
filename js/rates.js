var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("usd_rate").innerHTML = myObj.rates.RUB.toFixed(2);
  }
};
xmlhttp.open("GET", 'https://api.exchangeratesapi.io/latest?symbols=RUB&base=USD', true);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("eur_rate").innerHTML = myObj.rates.RUB.toFixed(2);
  }
};
xmlhttp.open("GET", 'https://api.exchangeratesapi.io/latest?symbols=RUB&base=EUR', true);
xmlhttp.send();