import { DataTypes } from "sequelize";
import connectDB from "../config/db.js";

const Companies = connectDB.define("companies", {
  cve_entidad: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  desc_entidad: {
    type: DataTypes.TEXT,
    defaultValue: "",
  },
  cve_municipio: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  desc_municipio: {
    type: DataTypes.TEXT,
    defaultValue: "",
  },
  id_indicador: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  indicador: {
    type: DataTypes.TEXT,
    defaultValue: "",
  },
  año: {
    type: DataTypes.TEXT,
    defaultValue: "",
  },
  valor: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  unidad_medida: {
    type: DataTypes.TEXT,
    defaultValue: "",
  },
}, {
    noPrimaryKey: true
}
);

Companies.removeAttribute("id");
Companies.removeAttribute("createdAt");
Companies.removeAttribute("updatedAt");
export default Companies;
