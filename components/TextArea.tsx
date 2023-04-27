import { Toaster, toast } from "react-hot-toast";
import { useEffect, useState } from "react";

export default function TextArea(props: any) {
  const [text, setText] = useState("Default text");

  useEffect(() => {
    if (props.tweet) {
      setText(props.tweet);
    }
  }, [props.tweet]);

  return (
    <div
      id={props.id}
      key={props.id}
      className="space-y-4 md:space-x-4 flex flex-col items-center mx-auto md:w-1/3"
    >
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 2000 }}
      />
      <div
        className="bg-white rounded-xl shadow-lg p-4 hover:bg-gray-100 transition cursor-copy border"
        onClick={() => {
          navigator.clipboard.writeText(props.tweet);
          toast("Copy text", {
            icon: "👍",
          });
        }}
      >
        <p>{props.tweet}</p>
      </div>
    </div>
  );
}
