export class ToppingChoice {
  public name: string;
  public value: string;

  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }
}

export function getToppings() {
  const choiceList: ToppingChoice[] = [
    { name: 'Pepperoni', value: 'Topping/pepperoniready.png' },
    { name: 'Lettuce', value: 'Topping/lettuceready.png' },
    { name: 'Chicken', value: 'Topping/chickenready.png' },
    { name: 'Pineapple', value: 'Topping/pineappleready.png' },
    { name: 'Strawberry', value: 'Topping/strawberryready.png' },
  ];
  return choiceList;
}
