import connectDb from "../DB/connection.js";
// import userRouter from "./users/user.router.js";

const initApp = (app, express) => {
  connectDb();
  app.use(express.json());
  //   app.use("/users", userRouter);
};

export default initApp;
