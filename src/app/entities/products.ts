export interface ProductsProps {
  code_bar: string
  description: string
  price: number
  quantity: number
}

export class Products {
  private props: ProductsProps;

  public set code_bar(value: string) {
    this.props.code_bar = value;
  }

  public get code_bar(): string {
    return this.props.code_bar
  }

  public set description(value: string) {
    this.props.description = value;
  }

  public get description(): string {
    return this.props.description
  }

  public set price(value: number) {
    this.props.price = value;
  }

  public get price(): number {
    return this.props.price
  }  
  
  public set quantity(value: number) {
    this.props.quantity = value;
  }

  public get quantity(): number {
    return this.props.quantity
  }  
}