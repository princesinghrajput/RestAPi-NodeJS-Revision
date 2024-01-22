const express = require('express');
const app = express();

const products_routes=require("./routes/products");

app.get("/", (req, res)=>{
    res.send("Hii I am Live")

})

app.use("/api/products", products_routes);

const PORT = process.env.PORT || 5000;

const start =async()=>{
    try {
        app.listen(PORT, ()=>{
            console.log(`${PORT} Yes, I am Connected`);

        })
    } catch (error) {
        console.log(error)
    }

}
start();