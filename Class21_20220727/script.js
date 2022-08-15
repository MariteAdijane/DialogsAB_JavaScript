let jsWindow = window.open(
'http://127.0.0.1:5500/Class15_20220706/index.html',
"about",
"height=600, width=800"
);

setTimeout(() => {
    window.open('http://127.0.0.1:5500/Class15_20220706/index.html', 'test', features)
    }, 3000);

    setTimeout(() => {
      /*  jsWindow.resizeTo(600, 300);// Will not work for third part resources because of CORS
       */ 
     jsWindow.resizeBy(-100,-100);
    }, 6000);

setTimeout(() => {
    jsWindow.close();
        }, 9000);
      
setTimeout(() => {
    window.open("http://127.0.0.1:5500/Class17_20220713/index.html", "_blank");
        }, 12000);
        