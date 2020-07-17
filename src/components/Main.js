import React, { useState, useEffect } from "react";
import DisplayImages from "./DisplayImages";
import SearchImage from "./SearchImage";
const Main = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const API_KEY = "";
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImages(data.hits);
        setLoading(false);
      })
      .then((error) => console.log(error));
  }, [term]);

  return (
    <div className="container mx-auto">
      <SearchImage searchText={(text) => setTerm(text)} />
      {!loading && images.length === 0 && (
        <h1 className="text-red-500 font-bold text-center">
          No Images found!!!
        </h1>
      )}
      {loading ? (
        <h1 className="text-green-500 font-bold text-center">
          Page is loading....
        </h1>
      ) : (
        <div className=" flex flex-row flex-wrap justify-between">
          {images.map((image) => (
            <DisplayImages key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
