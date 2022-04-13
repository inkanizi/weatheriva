import react from "react";

import "../index.scss"
import Details from "./Details";
import Search from "./Search";

const Aside = () => {
  return (
    <div className="Aside">
        <Search/>
        <Details/>
    </div>
  );
}

export default Aside;