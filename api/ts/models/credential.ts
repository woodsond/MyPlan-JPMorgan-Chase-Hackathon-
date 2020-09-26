import sequelize from "sequelize";
import { DataTypes, Sequelize } from "sequelize";

module.exports = (sequelize: Sequelize, dataTypes: DataTypes) => {
  return sequelize.define(
    "credential",
    {
      id: {
        type: dataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      password: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      deletedAt: {
        type: dataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "credentials",
      timestamps: true,
    }
  );
};
