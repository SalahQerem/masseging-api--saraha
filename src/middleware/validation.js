const dataMethod = ["body", "params", "query"];
const validation = (schema) => {
  return (req, res, next) => {
    const validationArray = [];

    dataMethod.forEach((key) => {
      if (schema[key]) {
        const validationResult = schema[key].validate(req[key], {
          abortEarly: false,
        });
        if (validationResult.error) {
          validationArray.push(validationResult.error);
        }
      }
    });

    if (validationArray.length > 0) {
      return res
        .status(400)
        .json({ message: "Validation error", validationArray });
    }
    next();
  };
};

export default validation;
