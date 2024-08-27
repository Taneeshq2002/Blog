import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlepost/Singlepost";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
