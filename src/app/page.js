"use client";

import { PostOwner } from "@/components/PostOwner";
import { comments } from "@/libs/comments";
import { useState } from "react";
export default function HomePage() {
  const [Comment, setcomments] = useState([]);

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner
          Name="Ronnachai Sitthichoksathit 650612098"
          Ment="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207
        "
        ></PostOwner>

        {/* Comment Example */}
        {Comment.map((Commentss) => (
          <Comment
            userImagePath={Commentss.userImagePath}
            username={Commentss.username}
            commentText={Commentss.commentText}
            likeNum={Commentss.likeNum}
            replies={Commentss.replies}
            key={Commentss.replies}
          ></Comment>
        ))}

        {/* Reply Example */}
        {/* <Reply /> */}
        <div className="d-flex gap-2 my-2 ps-5">
          <img
            src="/profileImages/puppy.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              หมาน้อย
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>จริงค้าบบบบบบบบ</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>2 คน</span>
            </div>
          </div>
        </div>

        {/* map-loop render Comment component here */}
        {/* {Comment.map()} */}
      </div>
    </div>
  );
}
