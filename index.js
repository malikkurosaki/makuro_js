require('bootstrap/dist/js/bootstrap.bundle.min')
require('./node_modules/tabulator-tables/src/scss/tabulator.scss');
require('./node_modules/bootstrap/scss/bootstrap.scss');
require('bootstrap/js/dist/popover')


module.exports = {
    AppBar: require('./src/app_bar'),
    App : require('./src/app'),
    ButtonDialog : require("./src/button_dialog"),
    Column: require('./src/column'),
    Container : require("./src/container"),
    Drawer: require('./src/drawer'),
    Obs : require("./src/obs"),
    Obx : require("./src/obx"),
    Scaffold: require('./src/scaffold'),
    TabbarView : require("./src/tabbar_view"),
    Table : require("./src/table"),
    TextButton : require("./src/text_button"),
    TextFormField : require("./src/text_form_field"),
    Text: require('./src/text'),
    Widget : require("./src/widget"),

}


