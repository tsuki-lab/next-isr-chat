"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

export const CommentForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await fetch("/api/comments", {
          method: "POST",
          body: new FormData(e.target as HTMLFormElement),
        });
        if (inputRef.current === null) return;
        inputRef.current.value = "";
        router.refresh();
      }}
      className="flex fixed bottom-0 left-0 right-0 p-2 gap-1"
    >
      <input
        ref={inputRef}
        type="text"
        name="comment"
        className="w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Send
      </button>
    </form>
  );
};
