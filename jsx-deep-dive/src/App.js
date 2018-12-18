import React from "react";
import Comment from "./Comment";
import faker from "faker";
import Card from "./Card";
// import "./App.css";

// function getCurrentTime() {
//   const current = new Date();
//   return current.toLocaleTimeString();
// } //function is a javacript expression, therefore can use it on our jsx

const App = () => {
  return (
    <div className="comments">
      <Card title="This title">
        {false && (
          <Comment
            name="Mary Smith"
            date="12/11/2018 9am"
            avatar={faker.image.avatar()}
            text="Hello"
          />
        )}
      </Card>
      <Card title="Other titles">
        {true || (
          <Comment
            name="Jude Henry"
            date="10/11/2018 11pm"
            avatar={faker.image.avatar()}
            text="banana"
          />
        )}
        {7 > 6 ? (
          <Comment
            name="Mary Smith"
            date="11/11/2018 3am"
            avatar={faker.image.avatar()}
            text="Nice"
          />
        ) : (
          <div>Not true</div>
        )}
      </Card>
    </div>
  );
};

export default App; //default implies that only that one thing is being exported
