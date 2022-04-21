import "../index.scss"
import GetDetails from "./containers/GetDetails";
import SearchLoc from "./containers/SearchLoc";

const Aside = () => {
  return (
    <div className="Aside">
        <SearchLoc/>
        <GetDetails/>
    </div>
  );
}

export default Aside;