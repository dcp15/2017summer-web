
// var name=["AED","AMD","ANG","AOA","ARS","AUD","BBD","BDT","BGN",
// "BHD","BRL","BSD","BWP","BYN","CAD","CHF","CLP","CNY","COP","CZK",
// "DKK","DOP","EEK","EGP","ETB","EUR","FJD","GBP","GHS","GTQ","HKD",
// "HNL","HRK","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD",
// "JPY","KES","KHR","KRW","KWD","KZT","LAK","LBP","LKR","LTL","LVL",
// "MAD","MKD","MMK","MUR","MXN","MYR","NAD","NGN","NOK","NZD","OMR",
// "PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB",
// "SAR","SCR","SEK","SGD","THB","TJS","TND","TRY","TTD","TWD","TZS",
// "UAH","UYU","UZS","VEF","VND","XAF","XCD","XOF","XPF","ZAR","ZMW"]
var from;
var to;
var database;
var datarates;
function updateData() {
    fetch('https://v3.exchangerate-api.com/bulk/37c5a904145b2f6a11ea0693/USD').then(function (response) {
        return response.json();
    }).then(function (data) {
        if (data.result === 'success') {
            database = data.from;
            datarates = data.rates;
            localStorage.setItem('data', JSON.stringify(data));
        }
    });
}

function retrieveData() {
    var data = localStorage.getItem('data');
    if (data) {
        data = JSON.parse(data);
        database = data.from;
        datarates = data.rates;
    } else {
        updateData();
    }
}


function currency_converter(moneyfrom,moneyto,number){
    retrieveData();
    var out;
    if(moneyfrom===database){
        out=number*datarates[moneyto];
        return out;
    }
    else if(moneyto===database){
        out=number/datarates[moneyfrom];
        return out;
    }
    else{
        out=number/datarates[moneyfrom]*datarates[moneyto];
        return out;
    }
}
window.setInterval(updateData,2592000);