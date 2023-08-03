import { CommentForm } from "@/features/CommentForm";
import { Comments } from "@/features/Comments";
import { fireStore } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { revalidatePath } from "next/cache";
import { Suspense } from "react";

async function onSendComment(formData: FormData) {
  "use server";
  await addDoc(collection(fireStore, "comments"), {
    text: formData.get("comment"),
    createdAt: new Date(),
  });
  revalidatePath("/");
}

export default function Home() {
  return (
    <main className="pb-24">
      <Suspense>
        <Comments />
      </Suspense>
      <CommentForm action={onSendComment} />
    </main>
  );
}
