import { Description } from "./description"

export interface ProductsProps {
  code_bar: string
  description: Description
  price: number
  quantity: number
  created_at: Date
}

export class Products {
  private props: ProductsProps;

  public set code_bar(value: string) {
    this.props.code_bar = value;
  }

  public get code_bar(): string {
    return this.props.code_bar
  }

  public set description(value: Description) {
    this.props.description = value;
  }

  public get description(): Description {
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
  
  public set created_at(value: Date) {
    this.props.created_at = value;
  }

  public get created_at(): Date {
    return this.props.created_at
  }  
}