# makuro js 

- AppBar()
- App()
- ButtonDialog()
- Column()
- Container()
- Drawer()
- Obs()
- Obx()
- Scaffold()
- TabbarView()
- Table()
- TextButton()
- TextFormField()
- Text()
- Widget()

### Contoh

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./main.js" defer></script>
</head>
<body>
    <div id="main"></div>
</body>
</html>
```

### main.js
```js
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
```