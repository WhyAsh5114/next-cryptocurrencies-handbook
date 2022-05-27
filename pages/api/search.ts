import { NextApiRequest, NextApiResponse } from "next";
import { searchTokens } from "../../lib/redis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const q = req.query.q.toString();
    const tokens = await searchTokens(q);
    res.status(200).json({ tokens });
}