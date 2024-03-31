import messageModel from "../../../DB/models/message.model.js";
import userModel from "../../../DB/models/user.model.js";

export const getMessage = async (req, res) => {
  const messages = await messageModel.find({ recieverId: req.user._id });

  return res.status(200).json({ messages });
};

export const sendMessage = async (req, res) => {
  const { recieverId } = req.params;
  const { content } = req.body;

  const user = await userModel.findById(recieverId);

  if (!user) {
    return res.status(404).json({ message: "User does not exist" });
  }

  const creatMessage = await messageModel.create({ content, recieverId });
  return res.status(201).json({ creatMessage });
};
