exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ hakuna: "Matata" }),
  };
};
