import './input-field.scss'
import React from "react";
import { ISignIn } from "./interface.ts";

const InputField = ({ hint, list, type, onChange }: ISignIn) => {

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value) {
      onChange?.(value)
    }
    return;
  }

  if (list) {
    return <input list={list} onChange={handleOnChange} type={type} placeholder={hint} />

  }

  return (
    <input onChange={handleOnChange} type={type} placeholder={hint} />
  )
}

export default InputField