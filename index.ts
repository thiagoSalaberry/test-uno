import * as express from "express";

const app = express();
const port = 2000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json("Corriendo gracias al comando start")
})

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
});