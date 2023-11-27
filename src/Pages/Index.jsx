import { useState, useEffect } from "react";

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
    <div>
      {bookmarks.map((bookmark) => (
        <div key={bookmark.id}>{bookmark.name}</div>
      ))}
    </div>
  );
};

export default Index;
