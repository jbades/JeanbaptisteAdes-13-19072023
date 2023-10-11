import CreateSignInForm from "../../components/signin-form/SignInForm";

export default function SignIn() {
    return <main className="main bg-dark">
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <CreateSignInForm/>
        </section>
    </main>
}