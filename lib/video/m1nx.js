exports.name = '/video/m1nx';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        let dirPath = __dirname + `/data/txt/m1nx.txt`;
        var videoList = (fs.readFileSync(dirPath, "utf-8").split(/\r?\n/));
        var randomvideo = videoList[Math.floor(Math.random() * videoList.length)].trim();
        res.jsonp({
            data: randomvideo,
            count: videoList.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}