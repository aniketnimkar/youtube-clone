import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const view = statistics.viewCount;
  return (
    <div className="p-2 m-2 w-72 h-80 shadow-lg rounded-lg transition duration-500 ease-in-out hover:shadow-slate-400">
      <img className="rounded-lg" alt="Thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="">{channelTitle}</li>
        <li>{view} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
