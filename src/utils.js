
export default {
    GetQueryString: function (name) {
        return decodeURIComponent(
            (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec("http://form-1.guangrongjie.com/?uid=885#/") || [, ""])[1].replace(/\+/g, '%20')) || null;
    }
}
