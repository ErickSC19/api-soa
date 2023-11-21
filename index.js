import { createServer } from 'node:http';
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from 'socket.io';
import connectDB from "./config/db.js";
import companiesRoutes from "./routes/companiesRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();
const server = createServer(app);
const io = new Server(server);

connectDB
  .authenticate()
  .then(() => console.log("-> connected to database"))
  .catch((error) => console.log(error));

const permitedDomains = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin && process.env.DEV) {
      //for bypassing postman req with  no origin
      return callback(null, true);
    }
    if (permitedDomains.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use("/get-data", companiesRoutes);

io.on('chat', (socket) => {
  console.log('a user connected');
  socket.on('message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server on port 4000");
});
