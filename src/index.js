import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentsDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <h3 className="ui dividing header">Comments</h3>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 05:03 AM"
          commentText={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Tarzan"
          timeAgo="Today at 06:03 AM"
          commentText={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Bill"
          timeAgo="Today at 05:06 PM"
          commentText={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>Do we get how that works?</ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
