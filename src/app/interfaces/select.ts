import {IOption} from './option'
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
