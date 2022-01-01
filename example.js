const { Tabulator } = require("tabulator-tables");
const { App, TabbarView, TextButton, ModalDialog } = require(".");
const AlertDialog = require("./src/alert_dialog");
const AppBar = require("./src/app_bar");
const Column = require("./src/column");
const Container = require("./src/container");
const Drawer = require("./src/drawer");
const IndexStack = require("./src/index_stack");
const Obs = require("./src/obs");
const Obx = require("./src/obx");
const Row = require("./src/row");
const Scaffold = require("./src/scaffold");
const Table = require("./src/table");
const Text = require("./src/text");
const TextFormField = require("./src/text_form_field");

/**@type {() => void} */
var drawerClose;

/**@type {Tabulator} */
var table;

/**@type {JQuery<HTMLInputElement>} */
var inputController;

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
                    autoColumns: true,
                    height: 200
                }, (tbl) => table = tbl),
                Container({
                    child: TextButton({
                        text: "tekan sini",
                        onClick: () => {
                            idx.value = 2;
    
                            ModalDialog({
                                title: Text("contoh")
                            })
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
                }),
                Row({
                    children: [
                        TextButton({
                            text: "add content",
                            onClick: () => {
                                AlertDialog({
                                    title: "Add content",
                                    content: Column({
                                        children: [
                                            TextFormField({
                                                label: "contoh",
                                                onChange: (val) => console.log(val),
                                                controller: (data) => inputController = data
                                            }),
                                            TextButton({
                                                text: "tekan",
                                                onClick: () => {
                                                    console.log(inputController.val())
                                                }
                                            })
                                        ]
                                    })
                                })
                            }
                        }),
                        Text("dua")
                    ]
                })
            ]
        })
    })
});

table.on('rowClick', (ev, row) => {
   console.log(inputController)
})

module.exports = {
    Example: App
}