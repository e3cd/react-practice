import React from "react";
import Comment from "./components/Comment";
import ApprovalCard from "./components/ApprovalCard";
import Faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          here
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <Comment
          author="mary"
          timeAgo="Today at 4:30pm"
          commentText="UNCLE BENJEEENN"
          image={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="john"
          timeAgo="Today at 5pm"
          commentText="FOR THE NIGHTS WATCH"
          image={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="jack"
          timeAgo="Yesterday at 3pm"
          commentText="AYYY CUUUH"
          image={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

export default App;
