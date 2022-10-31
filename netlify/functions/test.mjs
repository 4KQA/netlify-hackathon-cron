import { schedule } from "@netlify/functions";

let i = 0;
const hello = async (event, context) => {
  const date = new Date();
  i += 1;
  console.log({time: date.toTimeString(), count: i});
};

const handler = schedule("* * * * *", hello);
export { handler }
