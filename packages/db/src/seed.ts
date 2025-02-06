import { db, schema } from "./client";
import { seed } from "drizzle-seed";

const main = async () => {
  await seed(db, schema).refine((funcs) => ({
    example: {
      count: 10,
      columns: {
        title: funcs.loremIpsum({ sentencesCount: 1 }),
        content: funcs.loremIpsum({ sentencesCount: 10 }),
        createdAt: funcs.date({ minDate: new Date("2020-01-01"), maxDate: new Date() }),
        updatedAt: funcs.date({ minDate: new Date("2020-01-01"), maxDate: new Date() }),
      },
    },
  }));
};

main();
