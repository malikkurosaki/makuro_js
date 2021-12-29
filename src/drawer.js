
/**
 * 
 * @param {Object} param 
 * @param {HTMLElement} param.drawerHeader
 * @param {HTMLElement} param.drawerBody
 * @param {() => void} param.close
 * @returns {HTMLElement}
 * @example
 * ```
 * // untuk close drawer manual
 * var closeDrawer;
 * 
 * Drawer({
 *      close: (close) => closeDrawer = close,
 *      drawerHeader: ...,
 *      drawerBody: ...,
 * })
 * 
 * ```
 */
function Drawer(param){
    let el = $(
        `
            <div>
                <div class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </div>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <div class="d-flex flex-row-reverse col">
                            <div></div>
                            <div type="button" class="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close"></div>
                        </div>
                    </div>
                    <div class="drawerHead"></div>
                    <div class="offcanvas-body"></div>
                </div>
            </div>
        `
    );

    if(param && param.drawerHeader){
        $(el[0].getElementsByClassName("drawerHead")).append(param.drawerHeader);
    }

    if(param && param.drawerBody){
        $(el[0].getElementsByClassName("offcanvas-body")).append(param.drawerBody);
    }

    if(param && param.close){

        function tutup(){
            console.log("diditutup");
            $(el[0].getElementsByClassName("btn-close text-reset")).trigger('click');
        }
        param.close(tutup)
    }

    return el;
}

module.exports = Drawer