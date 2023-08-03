"use server";
import { fireStore } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { revalidatePath } from "next/cache";

export const addComment = async (formData: FormData) => {
  await addDoc(collection(fireStore, "comments"), {
    text: formData.get("comment"),
    createdAt: new Date(),
  });
  revalidatePath("/");
};
