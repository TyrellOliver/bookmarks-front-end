import { useState, useEffect } from "react";
import Bookmark from "../Components/Bookmark.jsx"

const Index = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const API = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(`${API}/bookmarks`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setBookmarks(res);
      });
  }, []);
  return (
    <div className="bookmark_container">
      {bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark} key={bookmark.id}/>
      ))}
    </div>
  );
};

export default Index;
