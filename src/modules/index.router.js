import connectDb from "../../DB/connection.js";
import authRouter from "./auth/auth.router.js";
import messageRouter from "./message/message.router.js";
import userRouter from "./user/user.router.js";

const initApp = (app, express) => {
  connectDb();
  app.use(express.json());
  app.use("/auth", authRouter);
  app.use("/message", messageRouter);
  app.use("/user", userRouter);
};

export default initApp;
