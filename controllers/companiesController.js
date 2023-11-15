import Companies from "../models/Companies.js";

const getCompanies = async (req, res) => {
  try {
    const query = await Companies.findAll({
      attributes: {
        exclude: [
          "cve_entidad",
          "desc_entidad",
          "cve_municipio",
          "desc_municipio",
        ],
      },
    });
    console.log(query);
    res.status(200).json(query);
  } catch (error) {
    console.log(error);
  }
};

export { getCompanies };
