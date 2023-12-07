import PropTypes from 'prop-types'
import { useState } from 'react'
import { TbEye, TbEyeOff } from 'react-icons/tb'

const Input = ({ label, name, type, id, value, placeholder }) => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  function togglePasswordVisibility() {
    setPasswordVisible((prevState) => !prevState)
  }

  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white cursor-pointer"
      >
        {label}
      </label>
      <div className={type === 'password' ? 'relative =' : ''}>
        <input
          type={type === 'password' ? passwordVisible ? 'text' : 'password' : type}
          name={name}
          id={id}
          placeholder={placeholder}
          defaultValue={value}
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-rose-600 focus:border-rose-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500" />
        {type === 'password'
          ? passwordVisible
            ? (<TbEye className='absolute top-1/2 -translate-y-1/2 left-[auto] right-4 cursor-pointer w-5 h-5' onClick={() => togglePasswordVisibility()} />)
            : (<TbEyeOff className='absolute top-1/2 -translate-y-1/2 left-[auto] right-4 cursor-pointer w-5 h-5' onClick={() => togglePasswordVisibility()} />)
          : ''
        }
      </div>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.number,
  value: PropTypes.string,
  placeholder: PropTypes.string
}

export default Input
