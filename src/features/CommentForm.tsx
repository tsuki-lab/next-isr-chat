"use client";

import { useRef } from "react";

export const CommentForm = (props: {
  action: (formData: FormData) => Promise<void>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.action(new FormData(e.target as HTMLFormElement));
        if (inputRef.current === null) return;
        inputRef.current.value = "";
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
