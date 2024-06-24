// Challenge 4 of 4: Focus the search field with separate components 
// Make it so that clicking the “Search” button puts focus into the field. Note that each component is defined in a separate file and shouldn’t be moved out of it. How do you connect them together?
// import SearchButton from './SearchButton.js';
// import SearchInput from './SearchInput.js';

// export default function Page() {
//   return (
//     <>
//       <nav>
//         <SearchButton />
//       </nav>
//       <SearchInput />
//     </>
//   );
// }


//solution
import SearchButton from './chlng4 components/searchButton';
import SearchInput from './chlng4 components/searchInput';
import {useRef} from 'react';
export default function Page() {
  const ref = useRef(null);
  function clickHndl(){
    ref.current.focus();
  }
  return (
    <>
      <nav>
        <SearchButton hndl={clickHndl}/>
      </nav>
      <SearchInput ref={ref}/>
    </>
  );
}
