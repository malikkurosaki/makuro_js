const $ = require('jquery');


/**
 * 
 * @param {Object} param 
 * @param {HTMLElement[]} param.tabs
 * @param {HTMLElement[]} param.views
 * @returns {TabbarView}
 */
function TabbarView(param){
    let el = $(
        `
           <div>
                <ul class="nav nav-tabs" id="myTab" role="tablist"></ul>
                <div class="tab-content" id="myTabContent"></div>
           </div>
        `
    );

  
    if(param && param.tabs){
        for(let t of param.tabs){
            let item = $(
                `
                <li class="nav-item" role="presentation">
                    <button class="nav-link " id="${t}-tab" data-bs-toggle="tab" data-bs-target="#${t}" type="button" role="tab" aria-controls="${t}" aria-selected="false"></button>
                </li>
                `
            );
            $(item[0].getElementsByClassName("nav-link")).append(t)
            $(el[0].getElementsByClassName("nav")).append(item)
        }

        $(el[0].getElementsByClassName('nav-link')[0]).addClass('active')
    }

    if(param && param.views){
        for(let v in param.views){
            let item = $(
                `
                    <div class="tab-pane fade " id="${param.tabs[v]}" role="tabpanel" aria-labelledby="${param.tabs[v]}-tab">
                        <div class="view"></div>
                    </div>
                `
            );
            $(item[0].getElementsByClassName('view')).append(param.views[v]);
            $(el[0].getElementsByClassName("tab-content")).append(item)
        }

        $(el[0].getElementsByClassName('tab-pane')[0]).addClass('show active')
    }

    return param? el: "TabbarView(?)";
}


module.exports = TabbarView