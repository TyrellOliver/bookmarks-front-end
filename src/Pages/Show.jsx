import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

const Show = () => {
  const [bookmark, setBookmark] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API}/bookmarks/${id}`)
      .then(res => res.json())
      .then((res) => {
        setBookmark(res);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      <h2>{bookmark.name} Page</h2>
      <h4>{bookmark.category}</h4>
      <h4>{bookmark.description}</h4>
      <a href={bookmark.url} target="_blank">{bookmark.name}</a>
    </div>
  );
};

export default Show;
