import express from "express";
import "./db/server.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import router from "./routes/blogsRouter.js";

const app = express();
const PORT = 5000;

app.use("/blogs", router);
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
