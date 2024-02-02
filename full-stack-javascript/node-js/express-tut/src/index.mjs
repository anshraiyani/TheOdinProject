import express from "express";
import indexRouter from "./routes/index.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";
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

app.post("/api/auth", passport.authenticate("local"), (req, res) => {
  res.sendStatus(200);
});

app.get("/api/auth/status", (req, res) => {
  console.log("inside /api/auth/status");
  console.log(req.user);
  return req.user ? res.send(req.user) : res.sendStatus(401);
});

app.post("/api/auth/logout", (req, res) => {
  if (!req.user) return res.sendStatus(401);
  req.logOut((err) => {
    if (err) return res.sendStatus(400);
    res.sendStatus(200);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server started in port: ${PORT}`);
});
