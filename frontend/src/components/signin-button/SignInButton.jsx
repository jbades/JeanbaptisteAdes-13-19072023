import { useDispatch } from 'react-redux';
// import { signin } from '../../store';

export default function SignInButton() {
    const dispatch = useDispatch();

    return (
        <button 
            className="sign-in-button" 
            onClick={() => {
                // dispatch(signin());
            }}
        >
            Sign In
        </button>
    );
}