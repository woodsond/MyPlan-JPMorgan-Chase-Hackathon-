import { database } from "./database";
import { seedDefaults } from "./seeders/seedDefaults";

export const credential = database.import("./models/credential");
export const user = database.import("./models/user");

user.hasOne(credential, { foreignKey: "id" });
credential.belongsTo(user, { foreignKey: "id" });

export const setupDb = async () => {
  await database.sync();
  seedDefaults();
};
