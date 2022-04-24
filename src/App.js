import "./index.scss"
import { useSelector } from "react-redux";

const App = ({children}) => {
  const store = useSelector((state) => state.details)

  console.log(store.description)

  return (
    <div style={{background:'url("../public/img/bg3.jpg") no-repeat',
                width: '100%',
                height: '100vh',
                backgroundSize: 'cover'}} className="App">
        {children}
    </div>
  );
}

export default App;
