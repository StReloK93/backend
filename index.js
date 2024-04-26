const jsonServer = require("json-server");
const middleware = require("./middleware");
const server = jsonServer.create();

const router = jsonServer.router("./db.json");

server.get("/products-count", (req, res, next) => {
  const data = router.db.getState().products.length;
  res.json(data);
});

const middlewares = jsonServer.defaults();
server.use(middleware);
server.use(middlewares);
server.use(router);
const port = 10000;
server.listen(port, "0.0.0.0", () => {
  console.log(`Json Server is running on port ${port}`);
});
