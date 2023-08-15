const express = require("express")
const app = express();
const cors = require("cors")

require(`dotenv`).config();

const port = process.env.PORT;
require("./configs/mongoose_config")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./routes/product_routes")(app)

app.listen(port, ()=> console.log(`Listening on port: 8000`))