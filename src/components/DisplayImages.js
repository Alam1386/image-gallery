import React from "react";

const DisplayImages = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-lg my-5">
      <img
        src={image.webformatURL}
        alt="Images from unsplash website"
        className="w-full"
      />
      <div className="py-4 px-6">
        <div className="font-bold text-green-600 text-xl mb-2">
          Photo by: {image.user}
        </div>
        <ul>
          <li>
            <strong> Views: </strong>
            {image.views}
          </li>
          <li>
            <strong> Likes: </strong>
            {image.likes}
          </li>
          <li>
            <strong> Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong> Favorites: </strong>
            {image.favorites}
          </li>
          <li>
            <strong> Comments: </strong> {image.comments}
          </li>
        </ul>
      </div>
      <div className="py-4 px-4 flex justify-between border-green-300 border-top-1 border-1">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="p-15 bg-green-900 text-gray-400 rounded-full px-2  "
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DisplayImages;
