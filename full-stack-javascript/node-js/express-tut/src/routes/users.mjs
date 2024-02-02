import { Router } from "express";
import {
  checkSchema,
  matchedData,
  query,
  validationResult,
} from "express-validator";
import { mockUsers } from "../utils/constants.mjs";
import { createUserValidationSchema } from "../utils/validationSchemas.mjs";
import { resolveIndexByUserId } from "../utils/middlewares.mjs";

const router = Router();

router.get(
  "/api/users",
  query("filter")
    .isString()
    .notEmpty()
    .withMessage("must not be empty")
    .isLength({ min: 3, max: 10 })
    .withMessage("must be atleast 3-10 chars"),
  (req, res) => {
    console.log(req.session.id)
    req.sessionStore.get(req.session.id,(err,sessionData)=>{
      if(err){
        console.log(err)
        throw err;
      }
      console.log(sessionData)
    })
    const result = validationResult(req);
    const { filter, value } = req.query;
    if (filter && value) {
      res.send(mockUsers.filter((users) => users[filter].includes(value)));
    }
    res.send(mockUsers);
  }
);

router.post(
  "/api/users",
  checkSchema(createUserValidationSchema),
  (req, res) => {
    const result = validationResult(req);
    console.log(result);
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: result.array() });
    }
    const data = matchedData(req);
    const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...data };
    mockUsers.push(newUser);
    return res.status(201).send(newUser);
  }
);

router.get("/api/users/:id", resolveIndexByUserId, (req, res) => {
  const { id } = req.params;
  const parseId = parseInt(id);
  if (isNaN(parseId)) {
    return res.status(400).send({ msg: "Bad Request" });
  }
  const reqUser = mockUsers.find((user) => user.id === parseId);
  if (!reqUser) return res.sendStatus(404);
  res.status(200).send(reqUser);
});

router.put("/api/users/:id", resolveIndexByUserId, (req, res) => {
  const { body, findUserIndex } = req;
  mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
  return res.sendStatus(200);
});

router.patch("/api/users/:id", resolveIndexByUserId, (req, res) => {
  const { body, findUserIndex } = req;
  mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
  return res.sendStatus(200);
});

router.delete("/api/users/:id", resolveIndexByUserId, (req, res) => {
  const { findUserIndex } = req;

  mockUsers.splice(findUserIndex, 1);
  return res.sendStatus(200);
});

export default router;
