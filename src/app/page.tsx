import { CommentForm } from "@/features/CommentForm";
import { Comments } from "@/features/Comments";

export default function Home() {
  return (
    <main className="pb-24">
      <h1 className="text-3xl font-bold p-2">
        Next.js Server Action <span className="text-blue-500">FREE</span> Chat
      </h1>
      <Comments />
      <CommentForm />
    </main>
  );
}
