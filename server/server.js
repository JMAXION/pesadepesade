import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import productRouter from "./router/productRouter.js";
import qnaRouter from "./router/qnaRouter.js";
import pressRouter from "./router/pressRouter.js";
import stockRouter from "./router/stockRouter.js";
import cartRouter from "./router/cartRouter.js";
import uploadRouter from './router/uploadRouter.js'
import categoryRouter from './router/categoryRouter.js'

const server = express();
const port = 8080;

server.use(express.json());
server.use(express.urlencoded());
server.use(cors());
server.use(bodyParser.json());
server.use("/uploads", express.static("uploads")); 

server.use("/product", productRouter);
server.use("/qna", qnaRouter);
server.use("/press", pressRouter);
server.use("/stock", stockRouter);
server.use("/cart", cartRouter);
server.use("/upload", uploadRouter);
server.use("/categories", categoryRouter);

server.listen(port, () => {
  console.log(`welcome ${port} server start`);
});
