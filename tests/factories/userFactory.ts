
import {faker} from "@faker-js/faker";

async function createUser() {
    return {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }



const userDataFactory = {
    createUser
}

export default userDataFactory;