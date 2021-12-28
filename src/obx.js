const $ = require('jquery');

/**
 * @param {Object} param 
 * @param {{key: String, value: String}} param.state 
 * @param {() => void} param.builder
 * @returns {Obx}
 */
 function Obx(param) {
    let key = param.state.key;

    let el = document.createElement('div');
    if (param && param.builder) el.append(param.builder());
    if (param && param.state) {
        
       $(document).on(key, function(){
           el.children[0].replaceWith(param.builder())
       })
    }
    return el;
}


module.exports = Obx