import { CommentForm } from "@/features/CommentForm";
import { Comments } from "@/features/Comments";
import { Suspense } from "react";

export const revalidate = 3600;

export default function Home() {
  return (
    <main className="pb-24">
      <h1 className="text-3xl font-bold p-2">
        Next.js ISR <span className="text-blue-500">FREE</span> Chat
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Comments />
      </Suspense>
      <CommentForm />
    </main>
  );
}
