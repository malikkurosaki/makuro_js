const $ = require('jquery');

/**
 * 
 * @param {Object} param 
 * @param {HTMLElement} param.home
 * @description
 * - gunakan hanya sekali dalam satu app
 */
function App(param){
    if(param && param.home){
        for(let c of param.home){
            $("#main").append(c)
        }
    }
}
module.exports = App