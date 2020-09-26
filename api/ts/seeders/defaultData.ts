import { database } from "../database";
import { uuidv4 } from "../utilities/uuidv4";
import { generatePassword } from "../routes/login";

const date: string = new Date().toUTCString();
const defaultPassword = process.env.DEFAULT_PASSWORD || "";

export const defaultUsersAndCredentials = async () => {
  const queryInterface = database.getQueryInterface();
  const usersArr: Array<any> = new Array<any>();
  const credentialsArr: Array<any> = new Array<any>();

  for (let i = 1; i <= 10; i += 1) {
    usersArr.push({
      id: uuidv4(),
      username: `user${i}`,
      experience: 0,
      createdAt: date,
      updatedAt: date,
    });
  }

  await queryInterface.bulkInsert("users", usersArr);

  usersArr.forEach((user: any) => {
    const elem: any = {
      id: user.id || "",
      password: generatePassword(defaultPassword),
      createdAt: date,
      updatedAt: date,
    };
    credentialsArr.push(elem);
  });

  await queryInterface.bulkInsert("credentials", credentialsArr);
};
