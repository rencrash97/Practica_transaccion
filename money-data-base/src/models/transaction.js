import { DataTypes } from "sequelize"
import sequelize from "../db.js"

export const Transaction = sequelize.define("transaction", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   money: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
   comment: {
        type: DataTypes.STRING(201)
    }

},{timestamps: false}
);