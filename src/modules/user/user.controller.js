import userModel from "../../../DB/models/user.model.js";

export const profile = async (req, res) => {
  const user = await userModel.findById(req.user._id);

  return res.status(200).json({ user });
};
