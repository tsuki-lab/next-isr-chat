"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export const CommentForm = () => {
  const router = useRouter();

  const [commentValue, setCommentValue] = useState("");

  const isDisabled = useMemo(() => {
    return commentValue === "";
  }, [commentValue]);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (isDisabled) {
          alert("コメントを入力してください");
          return;
        }

        const formData = new FormData();
        formData.append("comment", commentValue);

        fetch("/api/comments", {
          method: "POST",
          body: new FormData(e.target as HTMLFormElement),
        }).finally(() => {
          router.refresh();
          setCommentValue("");
        });
      }}
      className="flex fixed bottom-10 left-0 right-0 p-2 gap-1"
    >
      <input
        onChange={(e) => {
          setCommentValue(e.target.value);
        }}
        value={commentValue}
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
