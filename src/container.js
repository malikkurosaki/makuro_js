// eslint-disable-next-line no-unused-vars
const Widget = require("./widget");
const $ = require('jquery');

/**
 * 
 * @param {Object} param
 * @param {Widget} param.child 
 * @param {Padding} param.padding
 * @returns {Container}
 */
function Container(param){
    
    let con = $(
        `
            <div></div>
        `
    );

    if(param && param.child) con.append(param.child)


    return param? con: "Container(?)"
}


module.exports = Container