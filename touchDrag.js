const touchDrag = (function() {
    let posX = 0,
        posY = 0,
        dist = 0;

    function bindEvent(dom, callback) {
    	addEvent(dom, 'touchstart', function(e) {
            callback(e);
        });
    }

    function addEvent(elem, event, fn) {
        if (elem.addEventListener) {
            elem.addEventListener(event, fn, false);
        } else if (elem.attachEvent) {
            elem.attachEvent('on' + event, fn);
        } else {
            elem['on' + event] = fn;
        }
    }

    return {
        initEvent: bindEvent
    }

})();