const express = require('express');
const cors = require("cors")
const { port } = require("../config/index")

const itemsRoutes = require('../routes/items');


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use('/v1/api/items', itemsRoutes)

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});