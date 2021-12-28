

/**
 * @param {Object} param
 * @param {HTMLElement} param.title
 * @returns 
 */
function AppBar(param){
    let el = $(
        `
            <div>
                <nav class="navbar navbar-light bg-light fixed-top">
                    <div class="container-fluid">
                        
                    </div>
                </nav>
            </div>
        `
    );

    if(param && param.title){
        let tl = $(`<div class="navbar-brand" ></div>`);
        tl.html(param.title);
        $(el[0].getElementsByClassName("container-fluid")).append(tl);
    }

    return el
}

module.exports = AppBar;