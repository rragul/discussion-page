import React, {useState, useEffect} from "react";
import "./App.css";
import CommentForm from "./components/CommentForm";
import Comments from "./components/Comments";

function App() {
  const [comments, setComments] = useState([]);
  const user = {
    name: "Steve Jobs",
    img: "https://i.pravatar.cc/150?img=13",
    id: 10
  };

  useEffect(() => {
   fetch("http://localhost:3500/comments").then(
      (response) => response.json()
    ).then(
      (data) => setComments(data)
   )
  }, [comments]);
  return (
    <div className="container">
      <div className="title">Discussion</div>
      <CommentForm user={user} parentId={null}/>
      <div className="line"></div>
      <Comments comments={comments} user={user} />
    </div>
  );
}

export default App;
