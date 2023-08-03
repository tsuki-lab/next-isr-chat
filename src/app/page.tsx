import { CommentForm } from "@/features/CommentForm";
import { Comments } from "@/features/Comments";
import { Suspense } from "react";

export const revalidate = 3600;

export default function Home() {
  return (
    <main className="pb-24">
      <Suspense>
        <Comments />
      </Suspense>
      <CommentForm />
    </main>
  );
}
