import { faker } from "@faker-js/faker";

export const attendees = Array.from({ length: 200 }).map(() => {
  return {
    id: String(faker.number.int({ min: 10000, max: 20000 })),
    name: faker.person.fullName(),
    email: faker.internet.email().toLocaleLowerCase(),
    createdAt: String(faker.date.recent({ days: 30 })),
    checkedInAt: String(faker.date.recent({ days: 7 })),
  };
});
