interface ValidateLengthProps {
  value: string;
  min_length: number;
  max_length: number;
}

export function validateLength({ value, min_length, max_length }: ValidateLengthProps): boolean {
  return value.length < min_length || value.length > max_length;
}