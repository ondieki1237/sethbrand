import { NextResponse } from "next/server";
import { saveCalculatorResults } from "@/services/calculator.service";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Save calculator results using our calculator service
    const { shareId, timestamp } = saveCalculatorResults(data);
    
    // Return success response with share URL
    return NextResponse.json({
      success: true,
      shareId,
      timestamp,
      shareUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://sethbrand.com'}/tools/marketing-calculator/share/${shareId}`,
      results: data
    });
  } catch (error) {
    console.error("Error processing calculator results:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process calculator results" },
      { status: 500 }
    );
  }
}