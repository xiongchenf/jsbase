function DomTree(obj) {
    if (!obj) return;
    if (obj.el) {
        this.$el = document.getElementById(obj.el);
    }
    if (obj.template) {
    	this.$dom = {};
        this.$initialTemplate(obj.template);
    }

}

function $Dom(parent, ele, children) {
    this.parent = parent;
    this.ele = ele;
    this.children = children;
}

DomTree.prototype.$initialTemplate = function(tem) {
    let div = document.createElement('div');
    div.innerHTML = tem;
    let children = div.children;
    if (children.length > 1) {
        console.error('Must in one ParentNode');
        return;
    }
    let parent = new $Dom(null, children[0], children[0].children),
    	childs = children[0].children;
    let root = this.$loop(childs, parent);
    this.$dom.root = root;
    console.log(this.$dom);
}

DomTree.prototype.$loop = function(childs, parent) {
	for (let i = 0, l = childs.length; i < l; i++) {
		let val = childs[i],
			childs,
			dom;
		if (val.children.length > 0) {
			dom = $Dom(parent, val, val.children);
		} else {
			dom = $Dom(parent, val, val.children);
		}
	    return this.$loop(val.children, dom);
	}
}