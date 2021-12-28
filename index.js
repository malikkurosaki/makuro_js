// eslint-disable-next-line no-unused-vars
const $ = require('jquery');
require('bootstrap/dist/js/bootstrap.bundle.min')
require('./node_modules/tabulator-tables/src/scss/tabulator.scss');
require('./node_modules/bootstrap/scss/bootstrap.scss');
require('bootstrap/js/dist/popover')


module.exports = {
    App : require('./src/app'),
    TextButton : require("./src/text_button"),
    ButtonDialog : require("./src/button_dialog"),
    Container : require("./src/container"),
    Obx : require("./src/obx"),
    Obs : require("./src/obs"),
    TabbarView : require("./src/tabbar_view"),
    Table : require("./src/table"),
    TextFormField : require("./src/text_form_field"),
    Widget : require("./src/widget"),
    Text: require('./src/text'),
    Scaffold: require('./src/scaffold')
}

