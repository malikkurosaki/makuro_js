const $ = require('jquery');

/**
 * @param {Object} param 
 * @param {{key: String, value: String}} param.state 
 * @param {() => void} param.builder
 * @returns {Obx}
 */
 function Obx(param) {
    let el = $("<div></div>");
    if (param && param.builder) el.append(param.builder());
    if (param && param.state) {
        let key = param.state.key;
       $(document).on(key, function(){
            $(el[0].children).replaceWith(param.builder())
       })
    }
    return el;
}


module.exports = Obx