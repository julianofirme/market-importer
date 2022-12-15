import { validateLength } from "../utils/validate_length";

export class CodeBar {
  private readonly code_bar: string;
  private readonly MIN_CODE_BAR_LENGTH = 1;
  private readonly MAX_CODE_BAR_LENGTH = 16;

  get value(): string {
    return this.code_bar;
  }

  constructor(code_bar: string) {
    const isCodeBarLengthValid = validateLength({ 
      value: code_bar, 
      min_length: this.MIN_CODE_BAR_LENGTH, 
      max_length: this.MAX_CODE_BAR_LENGTH 
    });

    if (!isCodeBarLengthValid) {
      throw new Error(`Code bar must be between ${this.MIN_CODE_BAR_LENGTH} and ${this.MAX_CODE_BAR_LENGTH} characters.`);
    }

    this.code_bar = code_bar;
  }
}