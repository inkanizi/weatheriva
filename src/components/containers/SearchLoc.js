import { connect } from "react-redux";
import { setLoc } from "../../redux/actions"
import Search from "../Search";

  const mapDispatchToProps = dispatch => ({
    setLoc: location => dispatch(setLoc(location))
  })

  export default connect(
    mapDispatchToProps
  )(Search)