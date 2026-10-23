import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'employees.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const employees = JSON.parse(fileContents);
    return NextResponse.json(employees);
  } catch (error) {
    console.error('Error reading employees:', error);
    return NextResponse.json([]);
  }
}
