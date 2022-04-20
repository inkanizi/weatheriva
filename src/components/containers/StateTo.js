import { connect } from "react-redux";
import { setLoc } from "../../redux/actions"
import Main from "../Main";


const mapStateToProps = state => ({
    location: state.location,
    details: state.details
  })
  
const mapDispatchToProps = dispatch => ({
  setLoc: location => dispatch(setLoc(location))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)