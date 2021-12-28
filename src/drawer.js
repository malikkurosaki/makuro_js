
/**
 * 
 * @param {Object} param 
 * @param {HTMLElement} param.drawerHeader
 * @param {HTMLElement} param.drawerBody
 * @returns {HTMLElement}
 */
function Drawer(param){
    let el = $(
        `
            <div>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <div class="d-flex flex-row-reverse col">
                            <div></div>
                            <button type="button" class="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="offcanvas-body"></div>
                </div>
            </div>
        `
    );

    if(param && param.drawerHeader){
        $(el[0].getElementsByClassName("offcanvas-header")).append(param.drawerHeader);
    }

    if(param && param.drawerBody){
        $(el[0].getElementsByClassName("offcanvas-body")).append(param.drawerBody);
    }

    return el;
}

module.exports = Drawer