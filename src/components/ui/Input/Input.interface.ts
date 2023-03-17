export interface IInput {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  min?: number;
  max?: number;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}
