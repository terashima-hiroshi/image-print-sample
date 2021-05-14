const express = require('express');
const path = require('path');
const app = express();
// app.use(express.static(__dirname + "/docs/"));
app.use(/^\/image-print-sample.*$/, (req, res) => {
    console.log('image-print-sample access', req.baseUrl)
    // ファイル指定の場合は指定のファイルを返却
    if (req.baseUrl.indexOf('.') >= 0) {
        // プロジェクトディレクトリが指定されてない場合はプロジェクトディレクトリパスを付与
        const decodePath = decodeURI(req.baseUrl.replace('/image-print-sample', ''));
        const filePath = path.join(__dirname, './docs/', decodePath);
        console.log(req.baseUrl, filePath)
        // if (!fs.existsSync(filePath)) {
        //     // ファイルが存在しない場合にsendFileしてしまうと500エラーとなってしまうため、明示的に404で返す
        //     throw new NotFoundException();
        // }
        return res.sendFile(filePath);
    }

    // それ以外はindex.htmlを返却
    return res.sendFile(path.join(__dirname, './docs/index.html'));
})
app.use('*',  (req, res) => {
    return res.sendFile(path.join(__dirname, './docs', req.baseUrl));
})
const port = process.env.PORT || 5000;
app.listen(port);

console.log('server start')