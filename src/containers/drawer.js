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
    pushIntro: () => dispatch(push('/')),
    pushTodo: () => dispatch(push('/todo'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
