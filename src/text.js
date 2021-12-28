
/**
 * 
 * @param {Object} param
 * @param {String} param.class
 * @returns {HTMLElement}
 */
function Text(text, param){
    let el = $("<span></span>");

    if(param && param.class) {
        el.addClass(param.class)
    }

    if(text) {
        el.append(text)
    }

    return el;
}

module.exports = Text;