import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'reviews.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const reviews = JSON.parse(fileContents);
    
    // Sort by date, newest first
    reviews.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Error reading reviews:', error);
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, rating, message, employee, hero, screenshot } = body;
    
    // Validate required fields
    if (!name || !rating || !message || !employee || !hero) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Read existing reviews
    const filePath = path.join(process.cwd(), 'data', 'reviews.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const reviews = JSON.parse(fileContents);
    
    // Handle screenshot upload
    let screenshotPath = null;
    if (screenshot && screenshot.startsWith('data:image')) {
      try {
        // Extract base64 data
        const matches = screenshot.match(/^data:image\/(\w+);base64,(.+)$/);
        if (matches) {
          const ext = matches[1];
          const base64Data = matches[2];
          const buffer = Buffer.from(base64Data, 'base64');
          
          // Generate unique filename
          const timestamp = Date.now();
          const filename = `screenshot-${timestamp}.${ext}`;
          
          // Ensure uploads directory exists
          const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
          try {
            await fs.access(uploadsDir);
          } catch {
            await fs.mkdir(uploadsDir, { recursive: true });
          }
          
          // Save file
          const uploadPath = path.join(uploadsDir, filename);
          await fs.writeFile(uploadPath, buffer);
          
          // Store relative path for web access
          screenshotPath = `/uploads/${filename}`;
        }
      } catch (error) {
        console.error('Error saving screenshot:', error);
        // Continue without screenshot if upload fails
      }
    }
    
    // Create new review
    const newReview = {
      id: reviews.length > 0 ? Math.max(...reviews.map((r: any) => r.id)) + 1 : 1,
      name,
      rating: parseInt(rating),
      message,
      employee,
      hero,
      screenshot: screenshotPath,
      date: new Date().toISOString()
    };
    
    // Add to reviews array
    reviews.push(newReview);
    
    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(reviews, null, 2));
    
    return NextResponse.json({ success: true, review: newReview });
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.json(
      { error: 'Failed to create review' },
      { status: 500 }
    );
  }
}
