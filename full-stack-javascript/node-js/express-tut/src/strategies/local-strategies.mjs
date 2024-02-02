import passport from "passport";
import { Strategy } from "passport-local";
import { mockUsers } from "../utils/constants.mjs";

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
