import express from "express";
import cors from "cors";
import productRouter from "./router/productRouter.js";
import qnaRouter from "./router/qnaRouter.js";

const server = express();
const port = 8080;

server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

server.use("/product", productRouter);
server.use("/qna", qnaRouter);

server.listen(port, () => {
  console.log("server start");
});
