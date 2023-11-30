import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

export default function EditBookmarkForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editBookmark, setEditBookmark] = useState({
    name: "",
    url: "",
    category: "",
    description: "",
    is_favorite: false,
  });

  useEffect(() => {
    fetch(`${API}/bookmarks/${id}`)
      .then((res) => res.json())
      .then((resData) => setEditBookmark(resData))
      .catch((error) => error);
  }, []);

  // On changing the input form
  const handleChange = (event) => {
    const idValue = event.target.id;
    const inputValue = event.target.value;

    setEditBookmark((prev) => {
      return { ...prev, [idValue]: inputValue };
    });
  };

  const handleCheckbox = (event) => {
    const isChecked = event.target.checked;

    setEditBookmark((prev) => {
      return { ...prev, is_favorite: isChecked };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${API}/bookmarks/${id}`, {
      method: "PUT",
      body: JSON.stringify(editBookmark),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigate(`/bookmarks/${id}`))
      .catch((error) => error);
  };

  return (
    <div className="edit_bookmark">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            value={editBookmark.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="url">
          URL:
          <input
            type="url"
            id="url"
            value={editBookmark.url}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="category">
          Category:
          <input
            type="text"
            id="category"
            value={editBookmark.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="description">
          Description:
          <input
            type="text"
            id="description"
            value={editBookmark.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor="is_favorite">
          Favorite:
          <input
            id="is_favorite"
            type="checkbox"
            value={editBookmark.is_favorite}
            checked={editBookmark.is_favorite}
            onChange={handleCheckbox}
          />
        </label>
        <br />
        <br />
        <input type="submit" value={"Update Bookmark"}/>
      </form>
    </div>
  );
}
