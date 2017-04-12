import {IOption} from './option.interface'
export interface ISelect {
  id: string;
  extraClass: string;
  error: string;
  label: string;
  model: string;
  name: string;
  options: Array<IOption>;
  required: boolean;
}
