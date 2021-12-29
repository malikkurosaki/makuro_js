// eslint-disable-next-line no-unused-vars
const {TabulatorFull, Tabulator} = require('tabulator-tables');

/**
 * 
 * @param {Tabulator.Options} param
 * @param {(tabulator: Tabulator) => void} tabulator
 * @returns {Table}
 */
function Table(param, tabulator){

    let con = document.createElement('div');

    let tab = new TabulatorFull(con, param);
    con.append(tab);

    if(tabulator){
        tabulator(tab);
    }
    
    return param? con: "isiskan parameternya";
}

module.exports = Table