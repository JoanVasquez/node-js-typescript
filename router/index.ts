import * as express from "express";

import home from "./home";

const router = express.Router();

router.get("/home", home);

export default router;
