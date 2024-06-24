// Challenge 3 of 4:
// Scrolling an image carousel
// This image carousel has a “Next” button that switches the active image. Make the gallery scroll horizontally to the active image on click. You will want to call scrollIntoView() on the DOM node of the active image:

// import { useState } from 'react';

// export default function CatFriends() {
//   const [index, setIndex] = useState(0);
//   return (
//     <>
//       <nav>
//         <button onClick={() => {
//           if (index < catList.length - 1) {
//             setIndex(index + 1);
//           } else {
//             setIndex(0);
//           }
//         }}>
//           Next
//         </button>
//       </nav>
//       <div>
//         <ul>
//           {catList.map((cat, i) => (
//             <li key={cat.id}>
//               <img
//                 className={
//                   index === i ?
//                     'active' :
//                     ''
//                 }
//                 src={cat.imageUrl}
//                 alt={'Cat #' + cat.id}
//               />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// const catList = [];
// for (let i = 0; i < 10; i++) {
//   catList.push({
//     id: i,
//     imageUrl: 'https://placekitten.com/250/200?image=' + i
//   });
// }

//solution
import { useRef, useState } from "react";

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const cat = useRef(null);
  cat.current = new Map();
  const map = cat.current;
  // billi.index.scrollIntoView()
  return (
    <>
      <nav>
        <button
          onClick={() => {
            if (index < catList.length - 1) {
              setIndex(index + 1);
            } else {
              console.log(map);
              setIndex(0);
            }
            const node = map.get(index);
            node.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            });
            console.log(index);
          }}
        >
          Next
        </button>
      </nav>
      <div style={{width:"40rem", overflow:"scroll"}}>
        <ul style={{display:"flex",listStyle:"none",gap:"1rem"}}>
          {catList.map((cat, i) => (
            <li
              key={cat.id}
              ref={(node) => {
                if (node) {
                  // console.log(node);
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}
            >
              <img
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}
