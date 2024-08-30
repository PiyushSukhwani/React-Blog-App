import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 flex flex-col h-[500px]">
        <div className="w-full flex-grow mb-4 h-[300px]"> {/* Takes 75% of the height */}
          <img
            src={service.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-contain rounded-xl "
          />
        </div>
        <h2 className="text-xl text-black font-bold mb-2"> {/* Margin bottom for spacing */}
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;