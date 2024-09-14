// import React from "react";

// export default function SeletOption({ item }) {
//   return (
//     <select className="select select-bordered w-full select-sm">
//       <option disabled selected>
//         {item.name}
//       </option>
//       {item.options.map((option, index) => (
//         <option key={index} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   );
// }


// SeletOption.jsx
import React from "react";

const SeletOption = ({ item, value, onChange }) => (
  <select
    name={item.name}
    id={item.name}
    value={value}
    onChange={onChange}
    className="w-full border rounded-md p-2"
  >
    {item.options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default SeletOption;
