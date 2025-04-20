
var mouse = { x:0, y:0 };
var cursor = {
        x:window.innerWidth,
        y:window.innerHeight
};


Math.dist = function(a,b) {
    var dx = b.x - a.x;
    var dy = b.y - a.y;
    return Math.sqrt(Math.pow(dx,2), Math.pow(dy,2));

}

window.addEventListener("mousemove", function(e){
    cursor.x = e.clientX;
    cursor.y = e.clientY;
});

window.addEventListener("touchmove", function(e){
    var t = e.touches[0]; 
    cursor.x = t.clientX;
    cursor.y = t.clientY;

}, {
    passive: false

});

var char = function(container, char) {
    var span = document.createElement("span");
    span.setAttribute("data-char", char);
    span.innerText = char;
    container.appendChild(span);
    this.getDist = function(){
        this.pos = span.getBoundingClientRect();
        return Math.dist(mouse, {
            x: this.pos.x + (this.pos.width / 1.75),
            y: this.pos.y
        });
    }
    this.getAttr = function(dist, min, max){

        var wght = max - Math.abs((max * dist / maxDist));
        return Math.max(min, wght + min);
    }

    this.update = function(args){
        var dist = this.getDist();
        this.width = args.width ? ~~this.getAttr(dist,5, 200) : 100;
        this.wght = args.wght ? ~~this.getAttr(dist, 100, 800) : 400;
        this.alpha = args.alpha ? this.getAttr(dist, 0, 1).toFixed(2) : 1;
        this.ital = args.ital ? this.getAttr(dist, 0, 1).toFixed(2) : 0;
        this.draw();
    }
    this.draw = function(){
        var style = "";
        style += "opacity: " + this.alpha + ";";
        style += "font-variation-settings: 'wght' " + this.wght + ", 'wdth' " + this.width + ", 'ital' " + this.ital + ";";
        span.style = style;

    }
    return this;
}

var VFont = function(){
    this.scale  = false;
    this.flex  = true;
    this.alpha  = false;
    this.stroke = false;
    this.width  = true;
    this.weight = true;
    this.italic = true;
    var title, str, char = []

    this.init = function(){
        title = document.getElementById("title");
        str = title.innerText;
        title.innerHTML = "";
        for (var i = 0; i < str.length; i++);{
            var char = new char(title, str[i]);
            chars.push(char);
        }
        this.set();
        window.addEventListener("resize", this.setSize.bing(this));
    }
       
}