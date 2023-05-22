const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const HOSTNAME = 'localhost'
const PORT = process.env.PORT;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, hostname: HOSTNAME, port: PORT }) //
const handle = app.getRequestHandler();


const httpsOptions = {
    key: fs.readFileSync("./https_cert/localhost-key.pem"),
    cert: fs.readFileSync("./https_cert/localhost.pem")
};

app.prepare().then(() => {
    createServer(httpsOptions, (req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(PORT, (err) => {
        if (err) throw err;
        console.log("ready - started server on url: https://localhost:" + PORT);
    });
});

