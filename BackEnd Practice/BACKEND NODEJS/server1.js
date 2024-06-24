import express from "express"; // For creating server.
import path from "path"; // For rendering files using path or simply for getting paths of files.
import cookieParser from "cookie-parser"; // To check the cookies on the current page.
import mongoose from "mongoose"; // For using mongodb.
import jwt from "jsonwebtoken"; // For using the id of the user whose data is being added to the database.

const secretKey = "altu-jalaltu-aibalako-taltu";

mongoose
  .connect("mongodb://127.0.0.1:27017", { dbName: "login_data" })
  .then((c) => {
    console.log("database connected");
  })
  .catch((e) => {
    console.log(e);
  });
const loginData = new mongoose.Schema({
  Name: String,
  Email: String,
  setPassward: String,
});
const data = mongoose.model("loginData", loginData);
const app = express();
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("loginform");
});

app.get("/register", (req, res) => {
  res.render("registerform");
});

app.post("/register", async (req, res) => {
  const { Name, Email, setPassward } = req.body;
  const user = await data.create({ Name, Email, setPassward });
  const token = jwt.sign({ _id: user._id }, secretKey); // This is creating a secret id for the regestered user which will be sent to the page so that instead of dispaying/exposing actual id to the internet fake is sent and this will be further used to check/search the user in database when they login again.
  res.cookie("token", token, {
    httpOnly: true,
  });
  res.redirect("/navigation");
});

app.get("/navigation", (req, res) => {
  // console.log(req.cookies);
  const id = jwt.verify(req.cookies.token, secretKey, (err, decoded) => {
    if (err) {
      // If there's an error, the token is not valid or has expired.
      console.error("JWT verification failed:", err);
      // Handle the error appropriately (e.g., return an error response).
    } else {
      // If the verification is successful, the token is valid.
      console.log("JWT verification successful");
      console.log("Decoded payload:", decoded);
      return decoded;
      // The "decoded" object contains the decoded information from the token's payload.
      // You can access the claims (e.g., user ID, username, etc.) from the "decoded" object.
    }
  });
 data
    .findById(id.userid)
    .then((user) => {
      if (user) {
        // If the user is found, "user" will contain the matching document
        // console.log("User found:", user);
        userfound(user)
      } else {
        // If no matching document is found, "user" will be null
        console.log("User not found.");
      }
    })
    .catch((err) => {
      // Handle the error (e.g., return an error response)
      console.error("Error finding user:", err);
    });
    function userfound(user){
      res.render("navigation",{Name:user.Name});
    }
  // res.render("navigation");
});

app.post("/", async (req, res) => {
  const { Email, Passward } = req.body;
  console.log(Email, Passward);
  try {
    const userData = await data.find({ Email: Email });
    console.log(userData);
    if (userData) {
      // User found, perform desired actions
      console.log(`we are checking the password!`);
      console.log(userData[0].setPassward);
      if (userData[0].setPassward == Passward) {
        console.log(`we are redirecting to navigation section.`);
        const token = jwt.sign({ userid: userData[0]._id }, secretKey);
        res.cookie("token", token, {
          httpOnly: true,
        });
        res.redirect("/navigation");
      }else{
        const endodedMessage = "Wrong Password!";
        res.cookie("msg",endodedMessage,{
          maxAge:6000
        })
        res.redirect("/");
      }
    } else {
      // User not found
      console.log(`i guess we have found some errors.`);
      res.redirect("/");
    }
  } catch (error) {
    // Handle any errors that occur during the search
    const endodedMessage = "Invalid username or password";
        res.cookie("msg",endodedMessage,{
          maxAge:6000
        })
    res.redirect("/");
  }
});
app.listen(420, () => {
  console.log(`server is working`);
});

// this much code is enough for practice now its time create a login page
// app.get("/",(req,res) => {
//   res.sendFile(path.resolve() + "/navigation.html")
// })
// app.get("/contact",(req,res) => {
//   res.sendFile(path.resolve() + "/contact.html")
// })
// const isAuthonticated = (req,res,next)=>{
//   const { nitish:cookie } = req.cookies;
//   if(cookie){
//     res.render("logout")
//   }else{
//     next();
//   }
// }
// app.get("/login",isAuthonticated,(req,res) => {
//   res.render("login")
// })
// app.post("/login",(req,res) => {
//   res.cookie("nitish","2230061");
//   res.redirect("/login");
// })
// app.get("/logout",(req,res)=>{
//   res.cookie("nitish","null",{
//     expires:new Date(Date.now())
//   })
//   res.redirect("/login");
// })
// app.get("/about",(req,res) => {
//   res.sendFile(path.resolve() + "/about.html")
// })
// app.get("/help",(req,res) => {
//   res.sendFile(path.resolve() + "/help.html")
// })

// connecting Database:-

// import mongoose from "mongoose";
// mongoose.connect("mongodb://127.0.0.1:27017",{dbName : "Backend",}).then(c => {
//   console.log("database connected")
// }).catch(e => {
//   console.log(e)
// })
// const dataSchema = new mongoose.Schema({
//   name : String,
//   email : String,
//   message : String,
// })

// const data = mongoose.model("contactData",dataSchema)

// app.post("/contact",async (req,res) => {
//   // connectData.push(`{Username : ${req.body.name}, Email : ${req.body.email}, Message : ${req.body.message}}`)
//   const {name , email , message} = req.body;
//   // data.create({name:req.body.name, email:req.body.email, message:req.body.message})
//   // data.create({name:name, email:email, message:message})
//   await data.create({name, email, message}); // Because the key value pairs are same that why we have written it only once for all.
//   // res.sendFile(path.resolve() + "/contact.html")
//   // instead of doing this we can use the redirect method and redirect the user after submitting the contact form to a specific url or endpoint. See below:-
//   res.redirect("/contact")
// })

// Serving files:-

// setting up views engine
//   server.set("view engine","ejs")
// server.get("/", (req,res) => {
//     res.send(`<h1>Hello hariom</h1>`)
// })
// server.get("/getdata",(req,res) => {
//     res.render("index.ejs", {name1 : "Nitish"});
// })
// server.get("/connect",(req,res) => {
//     res.render("form.ejs");
// })
// server.post("/",(req,res) => {
//   console.log(req.body)
// })
// app.get("/storedData",(req,res) => {
//   res.json(connectData);
// })

//some data may be we can further use it for the authentication function :-
// (req,res,next)=>{
//   const { token } = req.cookies;
//   if(token){
//     next();
//   }else{
//     res.redirect("/login");
//   }
// }
