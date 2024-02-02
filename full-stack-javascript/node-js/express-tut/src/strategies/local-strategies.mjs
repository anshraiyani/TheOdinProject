import passport from "passport";
import { Strategy } from "passport-local";
import { mockUsers } from "../utils/constants.mjs";
import { User } from "../mongoose/schemas/user.mjs";
import { comparePassword } from "../utils/helpers.mjs";

passport.serializeUser((user, done) => {
  console.log("inside serialized user");
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log("inside deserialize");
  console.log(`deserialized id: ${id}`);
  try {
    const findUser = await User.findById(id);
    if (!findUser) throw new Error("user not found");
    done(null, findUser);
  } catch (error) {
    done(error, null);
  }
});

export default passport.use(
  new Strategy(async (username, password, done) => {
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);
    try {
      const findUser = await User.findOne({ username });
      if (!findUser) throw new Error("User not found");
      if (!comparePassword(password, findUser.password))
        throw new Error("Bad Credentials");
      done(null, findUser);
    } catch (error) {
      done(error, null);
    }
  })
);
