import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = () => {
  revalidatePath("/");
  return NextResponse.json({ revalidated: true, now: Date.now() });
};
