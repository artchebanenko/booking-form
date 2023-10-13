import { connect } from 'react-redux'
import { getFormState } from './selectors'

const FormStateFromRedux = ({ state }) => {
  console.log(JSON.stringify(state, 0, 2))
}

export default connect((state, ownProps) => ({
  state: getFormState(state, ownProps.form),
}))(FormStateFromRedux)

// Usage
// <FormStateFromRedux form="example" />
