import { useState, FormEvent, ChangeEvent } from 'react';
import { loginAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { LOGIN_FIELDS } from '../../const';
import InputField from '../../components/input-field/input-field';

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();

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

    if (formData.email && formData.password) {
      dispatch(loginAction({
        login: formData.email,
        password: formData.password
      }));
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
