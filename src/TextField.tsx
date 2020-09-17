import React from "react";
import "./App.css";

interface person {
  firstName: string;
  lastName: string;
}

interface props {
  text: string;
  ok?: boolean;
  i?: number;
  fn: (bob: string) => void;
  person: person;
}

const TextField: React.FC<props> = ({ person }) => {
  return (
    <div className="textfield">
      <p>
        {person.firstName}
        {"  "} {person.lastName}
      </p>
    </div>
  );
};

export default TextField;
