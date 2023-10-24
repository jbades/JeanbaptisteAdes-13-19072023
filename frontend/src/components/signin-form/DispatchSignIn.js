import { connect } from 'react-redux';

function DispatchSignInForm(props) {
    const { user, dispatch } = props;

    const usernameUpdate = (event) => {
        dispatch({ type: 'UPDATE_USERNAME', payload: event.target.value });
    }

    const passwordUpdate = (event) => {
        dispatch({ type: 'UPDATE_PASSWORD', payload: event.target.value });
    }

    const rememberMeUpdate = (event) => {
        dispatch({ type: 'UPDATE_REMEMBER_ME', payload: event.target.checked });
    }
}

export default connect((state) => ({ user: state }))(DispatchSignInForm);
