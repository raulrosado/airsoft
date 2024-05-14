import { NextResponse } from 'next/server';
import connectMongo from '../../config/connectDB'
import Events from '../../models/Events';

export async function GET() {
    try {
        connectMongo();
        const eventsList = await Events.find()
        return NextResponse.json(eventsList)
    } catch (e) {
        console.error(e);
        return NextResponse.json({
            message: "Error!"
        })
    }
}

