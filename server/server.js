import express from "express";
import cors from "cors";
import productRouter from "./router/productRouter.js";
import qnaRouter from "./router/qnaRouter.js";
import pressRouter from "./router/pressRouter.js";
import stockRouter from "./router/stockRouter.js";
import cartRouter from "./router/cartRouter.js";

const server = express();
const port = 8080;

server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

server.use("/product", productRouter);
server.use("/qna", qnaRouter);
server.use("/press", pressRouter);
server.use("/stock", stockRouter);
server.use("/cart", cartRouter);

server.listen(port, () => {
  console.log(`welcome ${port} server start`);
});
