module.exports = function (sequelize, DataTypes) {
    let Burgers = sequelize.define("Burgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
            devoured: {
                type: DataTypes.BOOLEAN,
                default: false
            }
    });
    return Burgers;
};