let counter = 0;
export default function handler(req, res) {
  counter = counter + 1;
  const httpCode = Math.floor(Math.random() * (3 - 1 + 1) + 1) == 3 ? 500 : 200; // 33% chance to get 500 status
  res
    .status(httpCode)
    .json({ counter, serverStatus: httpCode == 500 ? "unhappy" : "happy"  });
}
