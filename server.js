require("dotenv").config();
const express = require("express");
const authRouter = require("./routes/auth");
const productRoutes = require("./routes/productRoutes");
const rateRouter = require("./routes/rate");
const orderRoute = require( './routes/order');
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

/*app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});*/

app.use("/api/products", productRoutes);
app.use("/api/rate", rateRouter);
app.use("/api/auth", authRouter);
app.use('/api/orders', orderRoute);
app.get('/api/config/paypal', (req, res) => {
  res.send( process.env.PAYPAL_CLIENT_ID);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));