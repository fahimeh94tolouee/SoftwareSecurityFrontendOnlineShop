const express = require("express");
const helmet = require("helmet");
const next = require("next");
const cookieParser = require("cookie-parser");
const useragent = require("express-useragent");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// Middleware to validate route parameters
function validateId(req, res, next) {
  const id = req.params.id;
  if (!id || isNaN(id)) {
    return res.status(400).send("Invalid id parameter");
  }
  next();
}

app.prepare().then(() => {
  const server = express();

  // Helmet middleware for secure HTTP headers
  server.use(helmet());

  // Middleware for parsing cookies
  server.use(cookieParser());

  // Middleware for parsing user agents
  server.use(useragent.express());

  // Route handlers
  server.get("/p/:id", validateId, (req, res) => {
    const actualPage = "/product";
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
  });

  server.get("/product/:id", validateId, (req, res) => {
    const actualPage = "/product";
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
  });

  server.get("/categories/:slug", (req, res) => {
    const actualPage = "/categories";
    const queryParams = { slug: req.params.slug };
    app.render(req, res, actualPage, queryParams);
  });

  server.get("/profile/order/:id", validateId, (req, res) => {
    const actualPage = "/profile/order";
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
  });

  server.get("/profile/reject/:id", validateId, (req, res) => {
    const actualPage = "/profile/reject";
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
  });

  server.get("/compare/?*([0-9/])", (req, res) => {
    const actualPage = "/compare";
    app.render(req, res, actualPage);
  });

  // Catch-all route
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // Error handling middleware
  server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  });

  // Start server
  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
}).catch(ex => {
  console.error(ex.stack);
  process.exit(1);
});