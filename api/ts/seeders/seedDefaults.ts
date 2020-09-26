import { user } from "../connectors";
import { defaultUsersAndCredentials } from "./defaultData";

export const seedDefaults = async () => {
  const userCount = await user.count();
  if (userCount > 0) {
    return;
  }
  await defaultUsersAndCredentials();
};
