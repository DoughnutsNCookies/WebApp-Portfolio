// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const getRandomLocation = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  try {
    const response = await axios.get(
      "https://api.3geonames.org/?randomland=MY&json=1"
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Something boomed" });
  }
};

export default getRandomLocation;
