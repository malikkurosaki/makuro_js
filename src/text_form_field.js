
/**
 * @param {Object} param 
 * @param {String} param.label
 * @param {String} param.formText
 * @param {type} param.type
 * @param {Padding} param.padding
 * @param {(val: let frm: JQuery<HTMLInputElement>) => void} param.controller
 * @param {(val: String) => void} param.onChange
 * @returns {TextFormField}
 */
function TextFormField(param){

    let frm = $(
        `
           <div class="frm">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"></label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text"></div>
                </div>
           </div>
        `
    )


    if(param && param.label) $(frm[0].getElementsByClassName('form-label')).append(param.label)
    if(param && param.formText) $(frm[0].getElementsByClassName("form-text")).append(param.formText);
    if(param && param.padding) $(frm[0]).addClass("p-"+param.padding)
    if(param && param.controller) param.controller($(frm[0].getElementsByClassName("form-control")));

    if(param && param.onChange){
        $(frm[0].getElementsByClassName("form-control")).on('keyup', (data) => {
            param.onChange($(frm[0].getElementsByClassName("form-control")).val())
        })
    }

    return param? frm: "isi paramnya"
}

module.exports = TextFormField