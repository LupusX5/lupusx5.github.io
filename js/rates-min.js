var xmlhttp;(xmlhttp=new XMLHttpRequest).onreadystatechange=function(){if(4==this.readyState&&200==this.status){var t=JSON.parse(this.responseText);document.getElementById("usd_rate").innerHTML=t.rates.RUB.toFixed(2)}},xmlhttp.open("GET","https://api.exchangeratesapi.io/latest?symbols=RUB&base=USD",!0),xmlhttp.send(),(xmlhttp=new XMLHttpRequest).onreadystatechange=function(){if(4==this.readyState&&200==this.status){var t=JSON.parse(this.responseText);document.getElementById("eur_rate").innerHTML=t.rates.RUB.toFixed(2)}},xmlhttp.open("GET","https://api.exchangeratesapi.io/latest?symbols=RUB&base=EUR",!0),xmlhttp.send();