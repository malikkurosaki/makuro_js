

/**
 * 
 * @param {Object} param 
 * @param {Number} param.index
 * @param {HTMLElement[]} param.children
 */
function IndexStack(param){
    let el = $("<div></div>");
    if(param && param.children){
        param.children.forEach((elem) => {
            $(elem).addClass('indexStackItem');
            $(el).append($(elem))
        });

        if(param.index != null){
            
            $(el[0].getElementsByClassName("indexStackItem")).hide();
            $(el[0].getElementsByClassName('indexStackItem')[param.index]).show()
        }
    }

    return param? el: "IndexStack(?)"

}   

module.exports = IndexStack