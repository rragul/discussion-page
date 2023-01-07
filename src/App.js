import React, {useState, useEffect} from "react";
import "./App.css";
import CommentForm from "./components/CommentForm";
import Comments from "./components/Comments";
import {getComments} from "./api";

function App() {
  const [comments, setComments] = useState([]);
  const user = {
    name: "Steve Jobs",
    img: "https://i.pravatar.cc/150?img=13",
    id: 10
  };

  function setToComments (data){
    const newComments = [...comments, data];
    setComments(newComments);
  }
  useEffect(() => {
   getComments().then((data) => {
     setComments(data);
   });
  }, []);
  return (
    <div className="container">
      <div className="title">Discussion</div>
      <CommentForm data={comments} user={user} parentId={null} setToComments = {setToComments}/>
      <div className="line"></div>
      <Comments comments={comments} user={user} />
    </div>
  );
}

export default App;
