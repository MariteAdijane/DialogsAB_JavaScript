let jsWindow = window.open(
'http://127.0.0.1:5500/Class15_20220706/index.html',
"about",
"height=600, width=800"
);

setTimeout(() => {
        window.open('http://127.0.0.1:5500/Class18_20220718/index.html', 'test', features)
    }, 3000);

setTimeout(() => {
    jsWindow.resizeTo(500, 300)
}, 6000);

setTimeout(() => {
    jsWindow.close()
}, 9000);