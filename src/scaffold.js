

/**
 * 
 * @param {Object} param 
 * @param {HTMLElement[]} param.body
 * @param {HTMLElement} param.appBar
 * @param {HTMLElement} param.drawer
 * @returns {Scaffold}
 */
function Scaffold(param){
    let el = $(
        `
            <div>
                <div class="appbar"></div>
                <div class="mt-5">
                    <div style="height: 1px"></div>
                    <div class="body mt-3"></div>
                </div>
            </div>
        `
    );

    if(param && param.appBar){
        $(el[0].getElementsByClassName("appbar")).append(param.appBar);
        // $(el[0].getElementsByClassName("body")).addClass('mt-5')
    }

    if(param && param.drawer && param.appBar){
        $(param.appBar[0].getElementsByClassName('container-fluid'))
        .prepend(param.drawer)
    }

    if(param && param.body){
        $(el[0].getElementsByClassName("body")).append(param.body)
    }


    return param? el: "Scaffold(?)"
}

module.exports = Scaffold