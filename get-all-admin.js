const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    "viscan",
    "root",
    "root_password",
    {
        dialect: "mysql",
        host: "194.61.3.40"
    }
);

exports.handler = async (event) => {
    let result = await sequelize.query("select userId, concat(lastname, ' ',  firstname) as name from crm_users where isAdmin = 1", {
        type: Sequelize.QueryTypes.SELECT
    });
    const response = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return response;
}
