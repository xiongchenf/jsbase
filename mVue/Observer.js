function Observer(data) {
    this.data = data;
    this.walk(data);
}

Observer.prototype = {
    walk(data) {
        Object.keys(data).forEach(key => {
            this.convert(key, data[key]);
        });
    },
    convert(key, value) {
        this.defineReactive(this.data, key, value);
    },
    defineReactive(data, key, value) {
        var dep = new Dep();
        var child = observer(value); // 对子对象添加劫持
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: false,
            get() {
                if (Dep.target) {
                    dep.depend();
                }
                return value;
            },
            set(newValue) { // 数据发生变化
                if (newValue === value) {
                    return;
                }
                value = newValue;
                child = observer(newValue);// 新的值是object的话，进行监听
                dep.notify(); // 通知订阅者
            }
        })
    }   
}
// 
function observer(value, vm) {
    if (!value || typeof value !== 'object') {
        return;
    }
    return new Observer(value);
}

var uid = 0;

function Dep() {
    this.uid = uid++;
    this.subs = [];
}

Dep.prototype = {
    addSub(value) {
        this.subs.push(value);
    },
    depend() {
        Dep.target.addDep(this);
    },
    removeSub(sub) {
        var index = this.subs.indexOf(sub);
        if (index !== -1) {
            this.subs.splice(index, 1);
        }
    },
    notify() {
        this.subs.forEach(sub => {
            sub.update();
        })
    }
}

Dep.target = null;