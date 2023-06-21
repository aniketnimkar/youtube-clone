import { CiUser } from "react-icons/ci";
import { useState } from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  const [isReplyVisible, setIsReplyVisible] = useState(false);

  const showReply = () => {
    setIsReplyVisible(!isReplyVisible);
  };

  return (
    <div className="px-2 py-2">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-slate-300 p-2">
          <CiUser size={32} />
        </div>
        <div>
          <h1 className="font-bold text-xs">{name}</h1>
          <h2 className="text-xs">{text}</h2>
        </div>
      </div>
      {replies.length !== 0 && (
        <div
          className="font-bold text-xs pl-16 cursor-pointer py-2"
          onClick={showReply}
        >
          {isReplyVisible ? "Hide" : "Show"} Reply
        </div>
      )}
      {isReplyVisible && replies.length !== 0
        ? replies.map((data, idx) => (
            <div key={idx} className="p-3">
              <Comment data={data} />
            </div>
          ))
        : null}
    </div>
  );
};

export default Comment;
