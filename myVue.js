class Vue {
    constructor (o) {
        if (!o) return;
        if (o.data) {
            this.$init(o.data)
        }
        if (o.methods) {
            this.$methods(o.methods);
        }

        if(o.el) {
            this.$setEl(o.el);
        }
    }

    $init(obj) {
        for (let i in obj) {
            let o = {};
                o[i] = obj[i];
            Object.defineProperty(this, i, {
                set: function(val) {
                    console.log('set: ' + i + ' = '+ val);
                    return o[i] = val;
                },
                get: function() {
                    console.log('get: ' + i + ' = '+ o[i]);
                    return o[i];
                }
            });
        }
    }

    $methods(obj) {
        for (let i in obj) {
            console.log(obj[i]);
        }
    }

    $setEl(el) {
        if (!this.$el) {
            el = el.substring(1);
            this.$el = document.getElementById(el);
        }
        this.$render();
    }

    $render() {
        let html = this.$el.outerHTML;
        console.log(html);
        let doms = [];
        
    }
}









