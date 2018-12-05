import * as express from "express";

const app = express();

app.set("port", process.env.PORT || 8080);

import home from "./router/index";
app.use("/api", home);

app.listen(app.get("port"), () =>
  console.log(`Listening in port ${app.get("port")}`)
);
