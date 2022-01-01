
/**
 * 
 * @param {Object} param 
 * @param {String} param.text
 * @param {() => void} param.onClick
 * @returns {HTMLElement}
 */
function TextButton(param){
    let el = document.createElement('div');
    el.classList = 'btn btn-light'
    if(param && param.text) $(el).text(param.text);
    if(param && param.onClick) el.onclick = param.onClick
    return el;
}

module.exports = TextButton