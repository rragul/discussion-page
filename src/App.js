import './App.css';

function App() {
  return (
    <div className="container">
      <div className="title">Discussion</div>
      <div className="comment-form">
        <img src="https://i.pravatar.cc/150?img=13" alt="avatar" />
          <input type="text" id="comment" placeholder="What are your thoughts?"/>
          <button className="comment-btn">Comment</button>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default App;
