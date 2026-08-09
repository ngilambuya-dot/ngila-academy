import { NextResponse } from 'next/server';
import { searchLessons } from '@/lib/content';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';

    if (query.length < 2) {
        return NextResponse.json({ results: [] });
    }

    const results = searchLessons(query);
    return NextResponse.json({ results });
}