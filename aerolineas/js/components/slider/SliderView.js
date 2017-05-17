var SliderView = function(configs) {
    this.configs = configs;
    this.$el = document.querySelector(configs.el);
}

SliderView.prototype = {
    get: function(att) {
        return this.configs[att];
    },
    set: function(att, value) {
        this.configs[att] = value;
    },
    template: function() {
        let self = this;
        let template = this.configs.slides
            .map(slide => {
                return `<div class="mySlides fade ${slide.index - 1 === 0 ? "active" : ""}" data-position="${slide.index - 1}">
                    <div class="numbertext">${slide.index} / ${self.configs.slides.length}</div>
                    <img src="${slide.image}" style="width:100%" alt="${slide.text}">
                    <div class="text">${slide.text}</div>
                </div>`;
            })
            .reduce((previousValue, currentValue) => {
                return previousValue + currentValue;
            }, "");


        return template;
    },
    render: function() {
        let content = `<div class="slideshow-container row">
                ${this.template()}
                <a class="prev">&#10094;</a>
                <a class="next">&#10095;</a>
            </div>`;

        this.$el.innerHTML = content;
        this.setEvents();
    },
    setEvents: function() {
        if (this.get("events")) {
            for (var key in this.get("events")) {
                let action = key.split(" ")[0];
                let selector = key.split(" ")[1];
                let callback = this.get("events")[key];
                this.$el.querySelector(selector).addEventListener(action, this[callback]);
            }
        }
    },
    clickPrev: function(event) {
        $actualActive = document.querySelector(".active");
        if (parseInt($actualActive.dataset.position) > 0) {
            let $prev = document.querySelector(`[data-position="${parseInt($actualActive.dataset.position) - 1}"]`);
            $prev.classList.add("active");
            $actualActive.classList.remove("active");
        }
    },
    clickNext: function(event) {
        $actualActive = document.querySelector(".active");
        if (parseInt($actualActive.dataset.position) < 3) {
            let $next = document.querySelector(`[data-position="${parseInt($actualActive.dataset.position) + 1}"]`);
            $next.classList.add("active");
            $actualActive.classList.remove("active");
        }
    }
}

// blocking code 
var fs = require('fs');
var content = fs.open('file.txt');
console.log(content);

//non-blocking code

var fs = require('fs');
fs.open('text', function(data) {
    console.log(data);
});
console.log("hola mundo");