import React from "react";
import Comment from "./Comment";
import { CiUser } from "react-icons/ci";

const COMMENT_DATA = [
  {
    name: "Jane",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolores maxime, a recusandae consectetur quos impedit illum odio, vitae tempore porro qui nesciunt aliquid vero cumque perferendis velit aspernatur nam?",
    replies: [
      {
        name: "Spider",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolores maxime, a recusandae consectetur quos impedit illum odio, vitae tempore porro qui nesciunt aliquid vero cumque perferendis velit aspernatur nam?",
        replies: [
          {
            name: "Jane",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolores maxime, a recusandae consectetur quos impedit illum odio, vitae tempore porro qui nesciunt aliquid vero cumque perferendis velit aspernatur nam?",
            replies: [
              {
                name: "Loki",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolores maxime, a recusandae consectetur quos impedit illum odio, vitae tempore porro qui nesciunt aliquid vero cumque perferendis velit aspernatur nam?",
                replies: [],
              },
            ],
          },
          {
            name: "Jane",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolores maxime, a recusandae consectetur quos impedit illum odio, vitae tempore porro qui nesciunt aliquid vero cumque perferendis velit aspernatur nam?",
            replies: [],
          },
        ],
      },
      {
        name: "Loki",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolores maxime, a recusandae consectetur quos impedit illum odio, vitae tempore porro qui nesciunt aliquid vero cumque perferendis velit aspernatur nam?",
        replies: [],
      },
      {
        name: "Thor",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolores maxime, a recusandae consectetur quos impedit illum odio, vitae tempore porro qui nesciunt aliquid vero cumque perferendis velit aspernatur nam?",
        replies: [],
      },
    ],
  },
  {
    name: "Harry",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolores maxime, a recusandae consectetur quos impedit illum odio, vitae tempore porro qui nesciunt aliquid vero cumque perferendis velit aspernatur nam?",
    replies: [
      {
        name: "Jane",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolores maxime, a recusandae consectetur quos impedit illum odio, vitae tempore porro qui nesciunt aliquid vero cumque perferendis velit aspernatur nam?",
        replies: [],
      },
    ],
  },
  {
    name: "Peter",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolores maxime, a recusandae consectetur quos impedit illum odio, vitae tempore porro qui nesciunt aliquid vero cumque perferendis velit aspernatur nam?",
    replies: [
      {
        name: "May",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolores maxime, a recusandae consectetur quos impedit illum odio, vitae tempore porro qui nesciunt aliquid vero cumque perferendis velit aspernatur nam?",
        replies: [],
      },
    ],
  },
  {
    name: "May",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolores maxime, a recusandae consectetur quos impedit illum odio, vitae tempore porro qui nesciunt aliquid vero cumque perferendis velit aspernatur nam?",
    replies: [],
  },
  {
    name: "Spider",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolores maxime, a recusandae consectetur quos impedit illum odio, vitae tempore porro qui nesciunt aliquid vero cumque perferendis velit aspernatur nam?",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="py-5 w-4/6">
      <div className="flex gap-3 pl-10 pb-8 items-center">
        <CiUser size={24} />
        <input
          className="px-8 py-2 w-full focus:outline-none focus:border-black border-b-2"
          placeholder="Add a Comment"
        />
      </div>
      {COMMENT_DATA.map((comment) => {
        return <Comment data={comment} />;
      })}
    </div>
  );
};

export default CommentsContainer;
