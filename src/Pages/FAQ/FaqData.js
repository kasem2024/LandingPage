import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
const FaqData = (props) => {
  const [action, setAction] = useState(true);
  const answer = action ? "overflow" : "answer";
  const icon = action ? "icon" : "iconRotate";  // Toggle Icon
  return (
    <div className="FAQ">
      <div
        className="question"
        onClick={() => {
          setAction(!action);
        }}
      >
        <h3>{props.Q}</h3>
        <div className={icon}>
          <FaAngleDown />
        </div>
      </div>
      <p className={answer}>{props.ans}</p>
    </div>
  );
};

export default FaqData;




























// import { useState } from "react";
// import { FaAngleDown } from "react-icons/fa";
// const FaqData = (props) => {
//   const [action, setAction] = useState(true);
//   const answer = action ? "overflow" : "answer";
//   const icon = action ? "icon" : "iconRotate";  // Toggle Icon
//   return (
//     <div className="FAQ">
//       <div
//         className="question"
//         onClick={() => {
//           setAction(!action);
//         }}
//       >
//         <h3>{props.Q}</h3>
//         <div className={icon}>
//           <FaAngleDown />
//         </div>
//       </div>
//       <p className={answer}>{props.ans}</p>
//     </div>
//   );
// };

// export default FaqData;
