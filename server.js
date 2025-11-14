const next = require("next");
const { createServer } = require("http");

// Production mode
const dev = false;

// Next.js app init
const app = next({ dev });
const handle = app.getRequestHandler();

// Passenger sets its own port if available
const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res);
  });

  server.listen(PORT, () => {
    console.log("🚀 Next.js server running on port", PORT);
  });
});
