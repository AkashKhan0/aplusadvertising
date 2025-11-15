const next = require("next");
const { createServer } = require("http");

const dev = false;

const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res);
  });

  server.listen(PORT, () => {
    console.log("🚀 Next.js server running on port", PORT);
  });
});
