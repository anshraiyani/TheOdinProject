import express from "express";
import indexRouter from "./routes/index.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";
import { mockUsers } from "./utils/constants.mjs";
import passport from "passport";
import "./strategies/local-strategies.mjs";

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser("secretstring"));
app.use(
  session({
    secret: "anshraiyani",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(indexRouter);

const loggingMiddleWare = (req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
};

// app.use(loggingMiddleWare); //register middleware globally

const PORT = process.env.PORT || 3000;

app.get("/", loggingMiddleWare, (req, res) => {
  console.log(req.session);
  console.log(req.session.id);
  req.session.visited = true;
  res.cookie("key", "value", { maxAge: 60000 * 60, signed: true });
  res.status(201).send({ msg: "hello" });
});

app.post("/api/auth", (req, res) => {
  const {
    body: { username, password },
  } = req;
  const findUser = mockUsers.find((user) => user.username === username);
  if (!findUser || findUser.password !== password) {
    return res.status(401).send({ msg: "BAD CREDENTIALS" });
  }

  req.session.user = findUser;
  return res.status(200).send(findUser);
});

app.get("/api/auth/status", (req, res) => {
  return req.session.user
    ? res.status(200).send(req.session.user)
    : res.status(401).send({ msg: "NOT AUTHENTICATED" });
});

app.post("/api/cart", (req, res) => {
  if (!req.session.user)
    return res.status(401).send({ msg: "NOT AUTHENTICATED" });
  const { body: item } = req;
  const { cart } = req.session;
  if (cart) {
    cart.push(item);
  } else {
    req.session.cart = [item];
  }
  return res.status(201).send(item);
});

app.get("/api/cart", (req, res) => {
  if (!req.session.user)
    return res.status(401).send({ msg: "NOT AUTHENTICATED" });
  return res.send(req.session.cart ?? []);
});

app.listen(PORT, () => {
  console.log(`server started in port: ${PORT}`);
});
