/**
 * 
 * @param {*object} configs 
 */
var MenuBarView = function(configs) {
    this.configs = configs;
    this.$el = document.querySelector(configs.el);
}

/**
 * 
 */
MenuBarView.prototype = {
    /**
     * 
     */
    get: function(att) {
        return this.configs[att];
    },
    /**
     * 
     */
    set: function(att, value) {
        this.configs[att] = value;
    },
    /**
     * 
     */
    createItemList: function() {
        return this.configs.items
            .map(item => {
                return `<li><a href="${item.href}" target="${item.target}">${item.text}</a></li>`
            })
            .reduce((previousValue, currentValue) => {
                return previousValue + currentValue;
            }, "");
    },
    /**
     * 
     */
    render: function() {
        let itemList = this.createItemList();
        let template = `<nav class="cols left md-12"> 
                    <ul class="display-inline">
                        ${itemList}
                    </ul>
                </nav>`;

        this.$el.innerHTML = template;
    }
}