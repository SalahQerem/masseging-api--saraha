import connectDb from "../../DB/connection.js";
import authRouter from "./auth/auth.router.js";
import messageRouter from "./message/message.router.js";

const initApp = (app, express) => {
  connectDb();
  app.use(express.json());
  app.use("/auth", authRouter);
  app.use("/message", messageRouter);
};

export default initApp;
