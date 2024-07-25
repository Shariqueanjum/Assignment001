const express=require("express");
const cors=require("cors")

const connectDatabase=require("./mongodb/connect.js");



const adminRouter=require("./routes/admin.js");
const userRouter=require("./routes/users.js");



const app=express();

app.use(express.json());

app.use(cors());

const port = 3000;
const MONGODB_URL="mongodb+srv://shariqueanjum05:z4GU7KuKVBCgaBuU@cluster0.k07ojmv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



app.use("/admin", adminRouter)
app.use("/user" , userRouter)


const startServer = async () => {

    try {
      connectDatabase(MONGODB_URL);
      app.listen(3000, () => console.log(`Server started on ${port}`));
    }

     catch (error) {
      console.log(error);
    }

  };

  startServer();