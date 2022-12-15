import { CodeBar } from './code_bar';
import { Description } from "./description"

export interface ProductsProps {
  code_bar: CodeBar
  description: Description
  price: number
  quantity: number
  created_at: Date
}

export class Products {
  private _props: ProductsProps;

  public set code_bar(value: CodeBar) {
    this._props.code_bar = value;
  }

  public get code_bar(): CodeBar {
    return this._props.code_bar
  }

  public set description(value: Description) {
    this._props.description = value;
  }

  public get description(): Description {
    return this._props.description
  }

  public set price(value: number) {
    this._props.price = value;
  }

  public get price(): number {
    return this._props.price
  }  
  
  public set quantity(value: number) {
    this._props.quantity = value;
  }

  public get quantity(): number {
    return this._props.quantity
  }  
  
  public set created_at(value: Date) {
    this._props.created_at = value;
  }

  public get created_at(): Date {
    return this._props.created_at
  }  
}