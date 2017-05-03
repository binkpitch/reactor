import { connect } from 'react-redux'
import Drawer from '../components/drawer'
import { push } from 'react-router-redux'

const mapStateToProps = (state) => {
  return {
    pathname: state.router.location.pathname
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pushHomePage: () => dispatch(push('/'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
