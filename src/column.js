
/**
 * 
 * @param {Object} param 
 * @param {HTMLElement[]} param.children
 * @returns {HTMLElement}
 */
function Column(param){
    let el = $(`<div></div>`);
    $(el).attr({
        class: "d-flex flex-column"
    });

    if(param && param.children){
        for(let c of param.children){
            el.append(c);
        }
    }

    return el;
}

module.exports = Column;