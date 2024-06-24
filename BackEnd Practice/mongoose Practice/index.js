import mongoose from "mongoose";
import newUser from "./schema.js";
mongoose.connect("mongodb://127.0.0.1:27017",{dbName : "userReg",}).then(c => {
    console.log("database connected")
  }).catch(e => {
    console.log(e)
  })
  // const user = await newUser.create({
  //   Name:"ujwal",
  //   Email:"dsklfjsldkfj@gamil.com",
  //   password:"dfsfjsdfj700"
  // });
  // console.log(user);
  // const findingUser = await newUser.findOne({});
  // console.log(findingUser);
  // user.Name = "nishinoya";
  // await user.save();
  // console.log(user)

  // const foundUser = await newUser.find({Email:"nitishish@mail.com"});
  // console.log(foundUser);