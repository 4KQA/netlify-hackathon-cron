import { Handler } from "@netlify/functions";

const handler: Handler = async (event, context) => {
  const date = new Date();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: date.toDateString() }),
  };
};

export { handler };
