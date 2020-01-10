import React, { useState, useEffect } from "react";

// export default function Button() {
//     const [buttonText, setButtonText] = useState("Click me, please");
//     return (
//       <button onClick={() => setButtonText("Thanks, been clicked!")}>
//         {buttonText}
//       </button>
//     );
//     }  

// export default function Button() {
//     const [buttonText, setButtonText] = useState("Click me, please");
//     function handleClick() {
//       return setButtonText("Thanks, been clicked!");
//     }
//     return <button onClick={handleClick}>{buttonText}</button>;
// }  

// export default function DataLoader() {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         fetch("http://localhost:3001/links/")
//             .then(response => response.json())
//             .then(data => setData(data));
//     });
//     return (
//         <div>
//             <ul>
//                 {data.map(el => (
//                     <li key={el.id}>{el.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }  


// export default function useFetch(url) {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         fetch(url)
//             .then(response => response.json())
//             .then(data => setData(data));
//     }, []);
//     return data;

// }

// export default function useFetch(url) {
//     const [data, setData] = useState([]);
//     async function getData() {
//       const response = await fetch(url);
//       const data = await response.json();
//       setData(data);
//     }
//     useEffect(() => {
//       getData();
//     }, []);
//     return data;
// }
 