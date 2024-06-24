// Challenge 2 of 4:
// Focus the search field 
// Make it so that clicking the “Search” button puts focus into the field.
// export default function Page() {
//     return (
//       <>
//         <nav>
//           <button>Search</button>
//         </nav>
//         <input
//           placeholder="Looking for something?"
//         />
//       </>
//     );
//   }



//solution
import { useRef } from "react";
export default function Page() {
    const ref = useRef(null)
    return (
      <>
        <nav>
          <button onClick={()=>ref.current.focus()}>Search</button>
        </nav>
        <input ref={ref}
          placeholder="Looking for something?"
        />
      </>
    );
  }
  