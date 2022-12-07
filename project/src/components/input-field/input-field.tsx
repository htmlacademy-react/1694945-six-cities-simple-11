import { ChangeEvent } from 'react';
import { capitalizeString } from '../../utils';

type InputFieldProps = {
  field: string;
  handleFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function InputField({ field, handleFieldChange }: InputFieldProps): JSX.Element {
  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">{capitalizeString(field)}</label>
      <input
        className="login__input form__input"
        type={field}
        name={field}
        placeholder={capitalizeString(field)}
        onChange={handleFieldChange}
        required
      />
    </div>
  );
}
export default InputField;
