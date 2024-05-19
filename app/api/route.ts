import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await req.body;
    const client = new MongoClient(process.env.MONGODB_URI as string);
    await client.connect();
    const db = client.db();
    const collection = db.collection('flatten.photo');

    const result = await collection.insertOne(data);

    return Response.json({ success: true, message: 'Photo saved' });
  } catch (e) {
    console.error(e);
    return Response.json({ error: 'Internal Server Error' });
  }
}