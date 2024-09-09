const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();


dotenv.config();
connectDB();

app.use(express.json());


app.get("/", (req, res)=> {
    res.json({
        msg : "welcome to our server"
    })
})




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}...`);
  });