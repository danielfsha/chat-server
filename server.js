import express from "express";
import Gun from "gun";
import cors from "cors";

const app = express();

app.use(cors());
app.use(Gun.serve);

const PORT = 3000

app.get("/", (request, response) => {
    response.send("Chat Server is running...");
});

app.listen(PORT, () => {
    console.log(`Listen on the port ${PORT}...`);
});

Gun({ web: server })