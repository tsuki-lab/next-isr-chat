import { fireStore } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export const Comments = async () => {
  const comments = (
    await getDocs(
      query(collection(fireStore, "comments"), orderBy("createdAt", "desc"))
    )
  ).docs.map(
    (doc) =>
      ({ ...doc.data(), id: doc.id } as {
        text: string;
        createdAt: { seconds: number; nanoseconds: number };
        id: string;
      })
  );

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="flex justify-between w-full p-2 border-b"
          >
            {comment.text}
            <time>
              {new Date(comment.createdAt.seconds * 1000).getFullYear()}/
              {new Date(comment.createdAt.seconds * 1000).getMonth() + 1}/
              {new Date(comment.createdAt.seconds * 1000).getDate()}{" "}
              {new Date(comment.createdAt.seconds * 1000).getHours()}:
              {new Date(comment.createdAt.seconds * 1000).getMinutes()}:
              {new Date(comment.createdAt.seconds * 1000).getSeconds()}
            </time>
          </li>
        ))}
      </ul>
    </div>
  );
};
