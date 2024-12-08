import { Router } from "express";
import { setTrack } from "../controllers/trackController.js";

const trackRouter = Router();

trackRouter.post("/post", setTrack);

export default trackRouter;
