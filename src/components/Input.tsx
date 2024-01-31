import { FieldValues, UseFormRegister} from 'react-hook-form';

interface InputProps {
  register: any;
  errors: any;
  id: string;
  labelText: string;
  type: string;
  rules: {};
  placeholder: string;
}

const Input: React.FC<InputProps>= ({ register, errors, id, labelText, type, rules, placeholder }) => {
  return (
    <div className='mb-3'>
      <label htmlFor={id} className='form-label text-light'>
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        {...register(id, rules)}
        className={`form-control ${errors?.[id] && 'is-invalid'}`}
        placeholder={placeholder}
      />
      {errors?.[id] && (
        <div className='invalid-feedback text-end pe-2'>{errors?.[id]?.message}</div>
      )}
    </div>
  )
}

export default Input