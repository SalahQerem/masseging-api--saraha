import messageModel from "../../../DB/models/Message.model.js";
// import userModel from "../../../DB/models/user.model.js";

export const getMessage = async (req, res) => {
  const messageList = await messageModel.find({ recieverId: req.user._id });

  return res.json({ message: "okkk", messageList });
};

export const sendMessage = async (req, res) => {
  const { recieverId } = req.params;
  const { content } = req.body;

  //   const user = await userModel.findById(recieverId);

  const creatMessage = await messageModel.create({ content, recieverId });
  return res.status(201).json({ message: "success", creatMessage });
};
