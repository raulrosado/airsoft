import { NextResponse } from 'next/server';
import connectMongo from '../../config/connectDB'
import events from '../../models/Events';

export async function GET() {
    try {
        connectMongo();
        const eventsList = events.find().limit(10).toArray();
        console.log(eventsList)
        return NextResponse.json(eventsList)
    } catch (e) {
        console.error(e);
    }
}

