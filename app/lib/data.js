// import { connect } from "http2";
import { User } from "./models.js"
import { connectToDB } from "./utils";

export const fetchUsers = async (id) => {
    console.log(id);
    try {
      connectToDB()
      const users = await User.find();
      return users;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch user!");
    }
  };