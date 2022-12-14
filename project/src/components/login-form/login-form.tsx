import { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../store/user-process/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { LOGIN_FIELDS, PASSWORD_PATTERN, AppRoute } from '../../const';
import InputField from '../input-field/input-field';

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (formData.email && formData.password && formData.password.match(PASSWORD_PATTERN)) {
      dispatch(loginAction({
        login: formData.email,
        password: formData.password
      }));
      setFormData({
        email: '',
        password: ''
      });

      navigate(AppRoute.Main);
    }
  };

  const inputFields = LOGIN_FIELDS.map((field) => (
    <InputField
      key={field}
      field={field}
      handleFieldChange={handleFieldChange}
    />
  ));

  return (
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      {inputFields}
      <button
        className="login__submit form__submit button"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
}
export default LoginForm;
