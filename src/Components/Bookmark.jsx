import { Link } from "react-router-dom";

const Bookmark = ({bookmark}) => {
  return (
    <div className="bookmark_div" >
      <Link to={`/bookmarks/${bookmark.id}`}>{bookmark.name}</Link>
    </div>
  );
};

export default Bookmark;
