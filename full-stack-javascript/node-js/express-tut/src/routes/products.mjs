import { Router } from "express";
import { mockProducts } from "../utils/constants.mjs";

const router = Router();

router.get("/api/products", (req, res) => {
  if(req.signedCookies.key && req.signedCookies.key === 'value'){
    return res.status(200).send(mockProducts);
  }
  return res.status(400).send({msg:'wrong cookie'})
});

export default router;
