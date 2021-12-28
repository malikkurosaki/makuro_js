// eslint-disable-next-line no-unused-vars
const {TabulatorFull, Tabulator} = require('tabulator-tables');

/**
 * 
 * @param {Tabulator.Options} param 
 * @returns Table
 */
function Table(param){

    let con = document.createElement('div');

    let tab = new TabulatorFull(con, param);
    con.append(tab);


    return param? con: "isiskan parameternya";
}

module.exports = Table