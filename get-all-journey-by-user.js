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
    let id = '';
    let result = await sequelize.query("select id, userID, name, start, end, costCenter, costObject, startLocation, destLocation, status, createdAt, updatedAt, assigne from te_journey where userID = " + id, {
        type: Sequelize.QueryTypes.SELECT
    });
    const response = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return response;
}
