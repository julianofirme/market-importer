import { validateLength } from "../utils/validate_length";

export class Description {
  private readonly description: string;
  private readonly MIN_DESCRIPTION_LENGTH = 3;
  private readonly MAX_DESCRIPTION_LENGTH = 1024;

  get value(): string {
    return this.description;
  }

  constructor(description: string) {
    const isDescriptionLengthValid = validateLength({ 
      value: description, 
      min_length: this.MIN_DESCRIPTION_LENGTH, 
      max_length: this.MAX_DESCRIPTION_LENGTH 
    });

    if (!isDescriptionLengthValid) {
      throw new Error(`Description must be between ${this.MAX_DESCRIPTION_LENGTH} and ${this.MAX_DESCRIPTION_LENGTH} characters.`);
    }

    this.description = description;
  }
}