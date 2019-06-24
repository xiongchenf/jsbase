function Compile(el, vm) {
    this.$vm = vm;
    this.$el = this.isElementNode(el) ? el: document.querySelector(el);
    if (this.$el) {
        this.$fragment = this.node2Fragment(this.$el);
        this.init();
        this.$el.appendChild(this.$fragment);
    }
}

Compile.prototype = {
    init() {
        this.compileFragment(this.$fragment);
    },
    node2Fragment(el) {
        var fragment = docuemnt.createDocumentFragment(),
        child = null;
        while (child = el.firstChild) {
            fragment.appendChild(child);
        }
        return fragment;
    },
    compileFragment(el) {
        var childNodes = el.childNodes,
        var reg = /\{\{(.*)\}\}/;
        [].splice.call(childNodes).forEach(node => {
            var text = node.textContent;
            if (this.isElementNode(node)) {

            }
        });
    },
    isElementNode(node) {
        return node.type === 1;
    }
}