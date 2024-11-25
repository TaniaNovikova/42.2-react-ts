import {HTMLInputTypeAttribute} from 'react';


export interface InputProps {
  name: string;
  id: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  label?: string;
}
