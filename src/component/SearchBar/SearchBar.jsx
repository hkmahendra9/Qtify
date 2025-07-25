// import React from "react";
// import styles from "./SearchBar.module.css";

// export default function SearchBar() {
//   return (
//     <div className={styles.searchBar}>
//       <input type="text" placeholder="Search a album of your choice" />
//       <button>
//         <span role="img" aria-label="search">&#128269;</span>
//       </button>
//     </div>
//   );
// }

import React from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search an album of your choice" />
      <button aria-label="search">
        <SearchIcon />
      </button>
    </div>
  );
}

