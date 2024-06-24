import { forwardRef } from "react";

const SearchInput = forwardRef((props,ref) => {
    return (
      <input
      ref={ref}
        placeholder="Looking for something?"
      />
    );
  });
  export default SearchInput;