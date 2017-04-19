//app.js

//This the data I will fill the model
var promo = {
    "origin": "Buenos Aires",
    "destination": "El Calafate",
    "price": 1200,
    "currency": "ARS",
    "currencySymbol": "$"
};

// Creating view to render
var promoView = new PromoView({
    el: '#promos',
    model: new Promo(promo)
});

//As I set attributes to the view I just render its content
promoView.render();