module.exports = function (sequelize, DataTypes) {
    let Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            },

            devoured: {
                type: DataTypes.BOOLEAN
            }

        }
    })
    return Burger;
}