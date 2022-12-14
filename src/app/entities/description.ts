export class Description {
  private readonly description: string;
  private readonly MAX_DESCRIPTION_LENGTH = 1024;

  get value(): string {
    return this.description;
  }

  private validateDescriptionLength(value: string): boolean {
    return value.length <= this.MAX_DESCRIPTION_LENGTH;
  }

  constructor(description: string) {
    const isDescriptionLengthValid = this.validateDescriptionLength(description)

    if (!isDescriptionLengthValid) {
      throw new Error(`Description must be between 1 and ${this.MAX_DESCRIPTION_LENGTH}`)
    }

    this.description = description;
  }
}