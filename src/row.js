
/**
 * 
 * @namespace Aligm
 * @type 
 */

/**
 * 
 * @param {Object} param 
 * @param {HTMLElement[]} param.children
 * @param {Align} param.align
 * @returns {Row}
 */
function Row(param){
    let el = $("<div></div>");
    el.addClass("d-flex flex-row");

    if(param && param.align) {
        el.addClass(param.align)
    }

    if(param && param.children){
        param.children.forEach((e) => {
            el.append(e)
        })
    }

    return el

}

module.exports = Row