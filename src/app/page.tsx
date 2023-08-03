import { CommentForm } from "@/features/CommentForm";
import { Comments } from "@/features/Comments";

export const revalidate = 3600;

export default function Home() {
  return (
    <main className="pb-24">
      <Comments />
      <CommentForm />
    </main>
  );
}
