//app.js

//This the data I will fill the model
var promos = [{
    "origin": "Buenos Aires",
    "destination": "El Calafate",
    "price": 1200,
    "currency": "ARS",
    "currencySymbol": "$"
}, {
    "origin": "Buenos Aires",
    "destination": "El Calafate",
    "price": 1200,
    "currency": "ARS",
    "currencySymbol": "$"
}, {
    "origin": "Buenos Aires",
    "destination": "El Calafate",
    "price": 1200,
    "currency": "ARS",
    "currencySymbol": "$"
}, {
    "origin": "Buenos Aires",
    "destination": "El Calafate",
    "price": 1200,
    "currency": "ARS",
    "currencySymbol": "$"
}];

// Creating view to render
promos.forEach(promo => {
    var promoView = new PromoView({
        el: '#promos',
        model: new Promo(promo),
        events: {
            "click .origin": "clickOnAnchor"
        },
        clickOnAnchor: function(e) {
            console.log(e.target);
        }
    });

    //As I set attributes to the view I just render its content
    promoView.render();
})