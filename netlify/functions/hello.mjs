import fetch from "node-fetch";
import { schedule } from "@netlify/functions";

const apiHandler = async (event, context) => {
  const appRequest = await fetch(
    "https://rad-dodol-525b01.netlify.app/api/hello"
  );
  const date = new Date();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: date.toDateString(),
      info: "Made request to endpoint",
    }),
  };
};

export const handler = schedule("0/60 * * * *", apiHandler); // every 5 seconds
