import connectDB from "../../DB/connection.js";
import authRouter from "./auth/auth.router.js";
import messageRouter from "./message/message.router.js";
import userRouter from "./user/user.router.js";

const initApp = (app, express) => {
  connectDB();
  app.use(express.json());

  app.use("/user", userRouter);
  app.use("/message", messageRouter);
  app.use("/auth", authRouter);

  app.use("*", (req, res) => {
    return res.json({ message: "page not found" });
  });
};

export default initApp;
