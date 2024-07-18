const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./mongo/Employee")
require("dotenv").config();

const app = express()
app.use(express.json())
app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/registerInfo"
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email, password: password })
        .then((user) => {
            if (user) {
                if (user.password === password) {
                     res.json("Success")
                } else {
                    res.json({ message: "password is incorrect"});
                }
               
            } else {
                res.json({ message: "Login Failed, No record" })
            }
        })
        .catch((err) => console.error(err));

    
})


app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then((employees) =>res.json(employees))
        .catch(err => res.json( err))
})


app.listen(8182, () => {
    console.log("Server is running on port 8182");
})


