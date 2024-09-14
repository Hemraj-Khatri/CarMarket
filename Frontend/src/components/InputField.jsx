// import React from "react";
// export default function InputField({ item }) {
 

//   return (
//     <div>
//       <input
//         type={item.type}
//         name={item.name}
//         required={item.required}
//         className="border w-full py-1 rounded-md"
//       />
//     </div>
//   );
// }



// InputField.jsx
import React from "react";

const InputField = ({ item, value, onChange }) => (
  <input
    type={item.type}
    name={item.name}
    id={item.name}
    value={value}
    onChange={onChange}
    className="w-full border rounded-md p-2"
    placeholder={item.placeholder}
  />
);

export default InputField;
