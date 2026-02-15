import { Link } from "react-router-dom";
import { NOT_FOUND_PAGE_TEXT } from "../utils/labels/labels";

const NotFoundPage = () => {
  return (
    <div>
      <h1>{NOT_FOUND_PAGE_TEXT.TITLE}</h1>
      <Link to="/">{NOT_FOUND_PAGE_TEXT.BACK_HOME}</Link>
    </div>
  );
};

export default NotFoundPage;
