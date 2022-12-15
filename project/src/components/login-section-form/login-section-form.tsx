import LoginForm from '../login-form/login-form';

function LoginSectionForm(): JSX.Element {
  return (
    <section
      className="login"
      data-testid="login-section-form"
    >
      <h1 className="login__title">Sign in</h1>
      <LoginForm />
    </section>
  );
}
export default LoginSectionForm;
