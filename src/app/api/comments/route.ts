import { fireStore } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const formData = await request.formData();
    await addDoc(collection(fireStore, "comments"), {
      text: formData.get("comment"),
      createdAt: new Date(),
    });
    revalidatePath("/");
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ revalidated: false, now: Date.now() });
  }
};
