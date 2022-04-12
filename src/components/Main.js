import "../index.scss"
import Logo from "./Logo";

const Main = () => {
  return (
    <div className="Main">
        <Logo></Logo>

        <div className="block">
            <h1>26</h1>
            <h3>London</h3>
            <img src="../images/icn1.png" width={100} height={100}></img>
        </div>
    </div>
  );
}

export default Main;