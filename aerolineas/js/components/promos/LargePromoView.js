var LargePromoView = function(attributes) {
    LargePromoView._super_.call(this, attributes);
    this.attributes = attributes;
}
inherits(LargePromoView, PromoView);

LargePromoView.prototype.template = function() {
    return `<div class="cols left md-6">
                    <div class="row promo-content">
                        <div class="cols left md-6 promo-image">
                            <img src=">${this.get("model").get("image")}" alt="Imagen el Calafate" />
                        </div>
                        <div class="cols left md-6 promo-info">
                            <span class="promo-origin">>${this.get("model").get("origin")}</span>
                            <h2 class="aa-color promo-title promo-destination">>${this.get("model").get("origin")}</h2>
                            <p class="promo-description"> >${this.get("model").get("text")}</p>
                            <span class="promo-purchase-title">Tarifa:</span>
                            <span class="aa-color promo-price">$ >${this.get("model").get("price")}</span>
                            <a class="aa-color promo-purchase" href="/es-ar/reservasservicios/vuelo/147_buenos-aires-el-calafate">Comprar</a>
                        </div>
                    </div>
                </div>`
}