import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  const apiURL = `${process.env.OLLAMA_SERVER_URL}/chat?message=${req.query?.message}`;
  try {
    const response_json = await fetch(apiURL, { cache: "no-cache" });
    const json = await response_json.json();
    return res.status(200).json(json);
  } catch (e) {
    return res.status(500).json({ error: "Error fetching data" });
  }
}
