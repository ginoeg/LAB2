import { Router } from "express";
import * as ControllerPro from "./controller";

const productRouter = Router();

productRouter.route("/").get(ControllerPro.findAllPro);
productRouter.route("/:id").get(ControllerPro.findOnePro);
productRouter.route("/").post(ControllerPro.createPro);
productRouter.route("/:id").put(ControllerPro.updatePro);
productRouter.route("/:id").delete(ControllerPro.removePro);

export default productRouter;