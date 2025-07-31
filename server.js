const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;
server.use(middlewares);
server.use(router);

// ⚠ Quan trọng: chỉ định host là 0.0.0.0 để Render nhận cổng
server.listen(port, '0.0.0.0', () => {
  console.log(`JSON Server is running on port ${port}`);
});
