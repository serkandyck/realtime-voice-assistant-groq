import { NextResponse, NextRequest } from 'next/server';

export const GET = async () => {
    const apiKey = process.env.NEXT_PUBLIC_NEETS_API_KEY
    return NextResponse.json({ apiKey: apiKey }, { status: 200 });
};