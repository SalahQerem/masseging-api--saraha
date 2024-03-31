export const asyncHandler = (callback) => {
  return (req, res, next) => {
    callback(req, res, next).catch((error) => {
      return res.json({ message: "catch Error", error: error.stack });
    });
  };
};
