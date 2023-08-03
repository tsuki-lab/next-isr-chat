import { addComment } from "@/actions/addComment";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const formData = await request.formData();
    await addComment(formData);
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ revalidated: false, now: Date.now() });
  }
};
