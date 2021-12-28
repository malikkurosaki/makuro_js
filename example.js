const { App, TabbarView, TextButton } = require(".");
const AppBar = require("./src/app_bar");
const Column = require("./src/column");
const Drawer = require("./src/drawer");
const Scaffold = require("./src/scaffold");
const Table = require("./src/table");
const Text = require("./src/text");

App({
    home: Scaffold({
        appBar: AppBar({
            title: Text("Ini Adalah Judulnya")
        }),
        drawer: Drawer(),
        body: Column({
            children: [
                Text("ini ada dimana"),
                Text("ini ada dimana"),
                Text("ini ada dimana"),
                Text("ini ada dimana"),
                Text("ini ada dimana"),
                Text("ini ada dimana")

            ]
        })
    })
});

module.exports = {
    Example: App
}