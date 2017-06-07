
const fs = require('fs');

const router = require('koa-router')();

var files = fs.readFileSync(__dirname + '/controllers');

var js_files = files.filter((f) => {
    return f.endsWith('.js');
});

for (var f of js_files) {
    console.log(`process controller: ${f}`);
    
    let mapping = require(__dirname + '/controllers/' + f);
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }

}



