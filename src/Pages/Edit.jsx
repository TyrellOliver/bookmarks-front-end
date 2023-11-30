import EditBookmarkForm from "../Components/EditBookmarkForm";
import { Link, useParams } from "react-router-dom";

export default function Edit() {
    const {id} = useParams();
  return (
    <div>
      <EditBookmarkForm />
      <button><Link to={`/bookmarks/${id}`}>Back</Link></button>
    </div>
  );
}
