import { connect } from "react-redux";
import { setDetails } from "../../redux/actions"
import Details from "../Details";


const mapStateToProps = state => ({
    details: state.details
  })
  
const mapDispatchToProps = dispatch => ({
  setDetails: details => dispatch(setDetails(details))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details)