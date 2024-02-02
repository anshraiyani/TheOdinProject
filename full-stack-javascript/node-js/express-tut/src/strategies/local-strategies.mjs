import passport from "passport";
import { Strategy } from "passport-local";
import { mockUsers } from "../utils/constants.mjs";

passport.serializeUser((user, done) => {
  console.log("inside serialized user");
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log("inside deserialize");
  console.log(`deserialized id: ${id}`);
  try {
    const findUser = mockUsers.find((user) => user.id === id);
    if (!findUser) throw new Error("user not found");
    done(null, findUser);
  } catch (error) {
    done(error, null);
  }
});

export default passport.use(
  new Strategy((username, password, done) => {
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);
    const findUser = mockUsers.find((user) => user.username === username);
    try {
      if (!findUser) throw new Error("user not found");
      if (findUser.password !== password)
        throw new Error("Invalid Credentials");
      done(null, findUser);
    } catch (error) {
      done(error, null);
    }
  })
);
