import { DataTypes, Sequelize } from "sequelize";

module.exports = (sequelize: Sequelize, dataTypes: DataTypes) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: dataTypes.UUID,
        defaultValue: dataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: dataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      experience: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      deletedAt: {
        type: dataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "users",
      timestamps: true,
    }
  );
};
