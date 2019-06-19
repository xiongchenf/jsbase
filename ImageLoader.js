/**
 * 
 * 微信小程序图片预加载
 * @autor xiongchenf
 * 
*/
class ImageLoader {
    constructor({ base, source, loading, loaded }) {
        this.base = base;
        this.source = source;
        this.loading = loading;
        this.loaded = loaded;
        this._init();
    }

    _init() {
        console.log(1);
    }
}

export default new ImageLoader();
