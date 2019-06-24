function Watcher(vm, expOrFn, cb) {
    this.vm = vm;
    this.expOrFn = expOrFn;
    this.cb = cb;
    this.depIds = {}; // 依赖集合

    if (typeof expOrFn === 'funciton') {
        this.getter = expOrFn
    } else {
        this.getter = this.parseGetter(expOrFn)
    }
    this.value = this.get();
}

Watcher.prototype = {
    update() {
        this.run()
    },
    run() {
        var value = this.get();
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = oldVal;
            this.cb.call(this.vm, value, oldVal);
        }
    },
    addDep(dep) {
        
    },
    parseGetter(expOrFn) {

    },
    get() {

    }
}