import React from 'react';
import coverImage from "../../assets/cover/tree.png";
function Thought() {
  return (
    <section className="my-5">
      <h1>My thoughts </h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default Thought;