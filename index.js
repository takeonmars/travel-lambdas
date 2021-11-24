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

    let result = await sequelize.query('select * from travel_table', {
        type: Sequelize.QueryTypes.SELECT
    });
    console.log(result);

    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return response;
};