import React from "react";


const FeedbackPanel = (props) => {
  const {header, text} = props;
  return (
   <section>
     <div>
       <h2>{header}</h2>
       <p>{text}</p>
     </div>
   </section>
  );
};

export default FeedbackPanel;
