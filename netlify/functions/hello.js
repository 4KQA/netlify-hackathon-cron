import fetch from "node-fetch";

const handler = async (event, context) => {
  const appRequest = await fetch(
    "https://rad-dodol-525b01.netlify.app/api/hello"
  );
  const date = new Date();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: date.toDateString(), info: "Made request to endpoint" }),

  };
};

export { handler };
