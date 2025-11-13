const { createServer } = require("http");
const next = require("next");

const dev = false; // production mode
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // sob request handle korbe: frontend + admin + api
    handle(req, res);
  }).listen(process.env.PORT || 3000, () => {
    console.log("Server running on port", process.env.PORT || 3000);
  });
});
