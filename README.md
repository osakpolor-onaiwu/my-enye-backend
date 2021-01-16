# my-enye-backend
to call the api you need to supply a base currency and currency to be shown based on the base e.g


https://osakpolor-backend.netlify.app/.netlify/functions/api/rates?base=USD&currency=USD,CZK,EUR

this will give the following response

{
results:{	
    "base"  :	"USD"
    "date"	:"2021-01-15"
    "rates":{
        "CZK"	: 21.5812917595
        "EUR"	: 0.8248783304
        "USD"	: 1
    }
  }
}
