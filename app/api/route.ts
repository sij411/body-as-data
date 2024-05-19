
import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';
import connect from '@/db.js';
import Photo from "@/models/Photo.js";

export const config = { api: { bodyParser: true } };

export async function POST(req: NextRequest) {
  
    const { partialDataUrl } = await req.json();
    const newPhoto = new Photo({
      base64Data: partialDataUrl
    });

    const client = new MongoClient(process.env.MONGODB_URI as string);
    
    try {
      await client.connect();
      const db = client.db();
      const collection = db.collection('photos');

      const result = await collection.insertOne(newPhoto);
 
      return NextResponse.json(
        {
          success: true,
          message: 'Photo saved successfully',
          base64Data: newPhoto.base64Data // Fix: Provide a key-value pair separated by a colon
        });

    } catch (e) {
    console.error(e);
     return NextResponse.json(
      {
        success: false,
        message: 'Photo not saved',
      });
      
  }
}

export async function GET(req: NextRequest) {
  const client = new MongoClient(process.env.MONGODB_URI as string);
    
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('photos');

    const latestDocument = await collection.findOne({}, { sort: { _id: -1 } });

    return new NextResponse(JSON.stringify(latestDocument), { status: 200 });
    
  } catch (e) {
   return new NextResponse('Internal Server Error' + e, { status: 500 });
  }
}