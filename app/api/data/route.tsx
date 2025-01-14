// data retrieve api 
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const file = await fs.readFile(process.cwd() + '/app/data/data.json', 'utf-8');
        const data = JSON.parse(file);
        
        return NextResponse.json(data, {status: 200});
    } catch (err) {
        console.error(`Error reading the JSON file: ${err}`);

        return NextResponse.json(
            { error: 'Failed to fetch data' },
            { status: 500 }
        );
    }
}