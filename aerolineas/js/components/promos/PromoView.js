/**
 * PromoView class
 * Handles Rendering, events and differents stuff of a UI Component
 * This class is the glue between a model and the DOM
 * This class should only manage user interactions, and updates a model, 
 * without applying business logic
 * @param {object} attributes 
 */
var PromoView = function(attributes) {
    this.attributes = attributes;
    this.$el = document.querySelector(attributes.el);
    this.initialize.apply(this, arguments);
    return this;
}

/**
 * default getter
 */
PromoView.prototype.get = function(attribute) {
    return this.attributes[attribute];
}

/**
 * default setter
 */
PromoView.prototype.set = function(attribute, value) {
    this.attributes[attribute] = value;
}

/**
 * This method is an example about calling a metho with apply in a constructor
 * In this case, we can use it as a event binding.
 */
PromoView.prototype.initialize = function() {
    console.log("initializing View Promo with data", arguments);
};


/**
 * Render method,
 * given a template, renders a Component content
 * This can be as complex as you want
 */
PromoView.prototype.render = function() {
    var container = document.createElement('div');
    container.innerHTML = this.template();
    this.$el.append(container.firstChild);
}

/**
 * Builds a tamplate layout, attaching model to its container 
 */
PromoView.prototype.template = function() {
    return `<div class="cols left md-3">
                    <div class="short-promo-content promo-content">
                        <span class="promo-origin">${this.get("model").get("origin")}</span>
                        <h2 class="aa-color promo-title promo-destination">${ this.get("model").get("destination")}</h2>
                        <span class="promo-purchase-title">Tarifa:</span>
                        <span class="aa-color promo-price">$ ${this.get("model").get("price")}</span>
                        <a class="aa-color promo-purchase" href="/es-ar/reservasservicios/vuelo/138_buenos-aires-cordoba">Comprar</a>
                    </div>
                </div>`
}