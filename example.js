const { App, TabbarView, TextButton } = require(".");
const AppBar = require("./src/app_bar");
const Column = require("./src/column");
const Container = require("./src/container");
const Drawer = require("./src/drawer");
const IndexStack = require("./src/index_stack");
const Obs = require("./src/obs");
const Obx = require("./src/obx");
const Scaffold = require("./src/scaffold");
const Table = require("./src/table");
const Text = require("./src/text");

var drawerClose;

const idx = Obs(0);

App({
    home: Scaffold({
        appBar: AppBar({
            title: Text("Ini Adalah Judulnya")
        }),
        drawer: Drawer({
            close: (close) => drawerClose = close,
            drawerHeader: TextButton({
                text: "apa",
                onClick: () => {
                    
                    drawerClose()
                }
            })
        }),
        body: Column({
            children: [
                Table({
                    ajaxURL: 'https://jsonplaceholder.typicode.com/posts',
                    autoColumns: true
                }),
                Container({
                    child: TextButton({
                        text: "1",
                        onClick: () => {
                            idx.value = 2;
    
                            console.log("ditekn")
                        }
                    })
                }),
                Obx({
                    state: idx,
                    builder: () => 
                    IndexStack({
                        index: idx.value,
                        children: [
                            Text("ini addalah text pertamanya 0 "),
                            Text("ini adalah text keduanya 1 "),
                            Text("ini adalah text ketiganya 2 ")
                        ]
                    })
                })
            ]
        })
    })
});

module.exports = {
    Example: App
}