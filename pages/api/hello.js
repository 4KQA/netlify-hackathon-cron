// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let counter = 0;
export default function handler(req, res) {
  counter = counter + 1;
  res.status(200).json({ name: "John Doe v2", counter });
}
