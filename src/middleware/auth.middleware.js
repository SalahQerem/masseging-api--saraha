import jwt from "jsonwebtoken";
import userModel from "../../DB/models/user.model.js";

const auth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization.startsWith(process.env.BERERTOKEN))
    return res.json({ message: "Invalid authorization" });

  const token = authorization.split(process.env.BERERTOKEN)[1];
  if (!token) {
    return res.json({ message: "token not found" });
  }

  const decoded = jwt.verify(token, process.env.LOGINSIG);
  const authedUser = await userModel.findById(decoded.id).select("userName");

  req.user = authedUser;
  next();
};

export default auth;
