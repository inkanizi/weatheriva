import react from "react";
import "../index.scss"
import SearchLoc from "./containers/SearchLoc";
import Details from "./Details";

const Aside = () => {
  return (
    <div className="Aside">
        <SearchLoc/>
        <Details/>
    </div>
  );
}

export default Aside;