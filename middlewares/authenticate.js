import jwt from "jsonwebtoken";
import HttpError from "../helpers/HttpError.js";
import User from "../models/user.js";
import "dotenv/config";

const { ACCESS_TOKEN_KEY } = process.env;

async function authenticate(req, _res, next) {
  const { authorization = " " } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(HttpError(401, "Not authorized"));
  }
  try {
    const { id } = jwt.verify(token, ACCESS_TOKEN_KEY);
    const user = await User.findById(id);
    if (!user || !user.accessToken) {
      next(HttpError(401, "Not authorized"));
    }
    req.user = user;
    next();
  } catch {
    next(HttpError(401, "Not authorized"));
  }
}

export default authenticate;
