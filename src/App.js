import "./index.scss"
import { useSelector, useStore } from "react-redux";
import styled from "styled-components";
import img from "./bgImage/bg4.jpg"

  // const Block = styled.div`
  // background-image: url(${img});
  // background-size: cover;
  // width: 100%;
  // height: 100vh;
  // `
//////////////

  const App = ({children}) => {
  const store = useSelector((state) => state.details)

  console.log(store.description)

  return (
    <div className="App">
        {children}
    </div>
  );
}

export default App;
