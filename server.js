const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");


const HOSTNAME = 'staybook.in'
const PORT = 443;
const dev = false
const app = next({ dev, hostname: HOSTNAME, port: PORT }) 

const handle = app.getRequestHandler();
const httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/staybook.in/privkey.pem', 'utf8'),
    cert: fs.readFileSync('/etc/letsencrypt/live/staybook.in/fullchain.pem', 'utf8')
};

app.prepare().then(() => {
    createServer(httpsOptions, (req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(PORT, (err) => {
        if (err) throw err;
    });
});

