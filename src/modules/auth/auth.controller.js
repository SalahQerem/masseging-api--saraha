import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { userName, email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    return res.status(409).json({ message: "email already exists" });
  }
  const hashPssword = await bcrypt.hash(
    password,
    parseInt(process.env.SALT_ROUND)
  );
  const token = await jwt.sign({ email }, process.env.CONFIRMEMAILTOKEN, {
    expiresIn: "1h",
  });
  const refreshToken = await jwt.sign(
    { email },
    process.env.CONFIRMEMAILTOKEN,
    { expiresIn: 60 * 60 * 24 * 30 }
  );
  const html = `
<p>welcom  ${userName}</p>
<div>
<a href='${req.protocol}://${req.headers.host}/auth/confirmEmail/${token}'>confirm email</a>
 <a href='${req.protocol}://${req.headers.host}/auth/confirmEmail/${refreshToken}'>resend confirm email</a>;
 </div>
 
 `;

  await sendEmail(email, "confirm Email", html);
  const newUser = await userModel.create({
    userName,
    email,
    password: hashPssword,
  });
  if (!newUser) {
    return res.json({ message: "error while creating user" });
  }

  return res.status(201).json({ message: "success", newUser });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel
    .findOne({ email })
    .select("userName password confirmEmail");
  if (!user) {
    return res.status(400).json({ message: "email does not exists" });
  }
  if (!user.confirmEmail) {
    return res.json({ message: "please confirm your email" });
  }
  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(400).json({ message: "Invalid Password" });
  }

  const token = jwt.sign({ id: user._id }, process.env.LOGINSIG, {
    expiresIn: "1h",
  });

  return res.status(200).json({ message: "success", token });
};
