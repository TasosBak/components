import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <h3 className="ui dividing header">Comments</h3>

      <div className="comment">
        <a href="/" className="avatar">
          <img alt="profile pic" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Alkara
          </a>
          <div className="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="text">Much artistic!</div>
          <div className="actions">
            <a href="/" className="reply">
              Reply
            </a>
          </div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img alt="profile pic" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Than
          </a>
          <div className="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="text">Much artistic!</div>
          <div className="actions">
            <a href="/" className="reply">
              Reply
            </a>
          </div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img alt="profile pic" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Tasos
          </a>
          <div className="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="text">Much artistic!</div>
          <div className="actions">
            <a href="/" className="reply">
              Reply
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
