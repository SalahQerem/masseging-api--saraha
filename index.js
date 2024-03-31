import express from "express";
// import "dotenv/config";

const app = express();
const PORT = 3000;

// initApp(app, express);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
