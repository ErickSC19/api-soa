import dotenv from "dotenv/config";
import Sequalize from "sequelize";

const connectDB = new Sequalize(process.env.CONN_STRING
  //process.env.DB_NAME,
  //process.env.DB_USER,
  //process.env.DB_PASS,
  //{
    //host: process.env.DB_HOST,
    //port: process.env.DB_PORT,
    //dialect: "postgres",
    //dialectOptions: {
    //  application_name: process.env.ENDPOINT_ID,
    //  ssl: "require"
    //},
    //pool: {
    //  max: 5,
    //  min: 0,
    //  acquire: 30000,
    //  idle: 10000,
    //},
    //operatorAliases: false,
    //logging: false,
  //}
);

export default connectDB;
