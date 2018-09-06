;(function (win) {
    function ImageLoader() {
        let arr = [];
        this.insert = (item) => {
            arr.push(item);
        };

        this.init = (o) => {
            let that = this;
            let res = [];
            loop(o, res);
            res.map((v) => {
                that.insert(new Img(v));
            });
        };

        this.load = (callback) => {
            let that = this;
            arr.map((v) => {
                console.log(v);
                v.img.src = v.src;
            });
            let flag = true,
                timer = setInterval(() => {
                    let res = this.isLoaded();
                    callback(res);
                    if(res.status) {
                        clearTimeout(timer);
                    }
                }, 200);

            setTimeout(() => {
                clearTimeout(timer);
            }, 10000);
        };

        this.isLoaded = () => {
            let status = true, count = 0;
            arr.map((v) => {
                if (!v.status) {
                    status = false;
                } else {
                    count += 1;
                }
            });
            return {
                status: status,
                count: count,
                totalCount: arr.length
            };
        };

        let Img = function(src) {
            this.img = new Image();
            this.src = src;
            this.status = false;
            this.fail = true;
            this.img.onload = () => {
                this.status = true;
            }
            this.img.onerror = () => {
                this.fail = true;
            }
        }

        let loop = (o, res) => {
            let tem = Object.keys(o);
            tem.map(v => {
                if (typeof o[v] === 'object') {
                    loop(o[v], res);
                } else {
                    res.push(o[v]);
                }
            });
        }
    }

    win.ImageLoader = ImageLoader;
})(window);