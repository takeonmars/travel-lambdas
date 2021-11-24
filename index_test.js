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

let a = async () => {
    let res = await sequelize.query("select userId, concat(lastname, ' ',  firstname) as name from crm_users where isAdmin = 1", {
        type: Sequelize.QueryTypes.SELECT
    });
    console.log(res);
}

a();