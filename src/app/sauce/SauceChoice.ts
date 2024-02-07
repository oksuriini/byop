export class SauceChoice {
  public name: string;
  public value: string;
  public image: string;
  public formControlName: string;

  constructor(
    name: string,
    value: string,
    image: string,
    formControlName: string,
  ) {
    this.name = name;
    this.value = value;
    this.image = image;
    this.formControlName = formControlName;
  }
}

export function getSauces(): SauceChoice[] {
  const sauceChoices: SauceChoice[] = [
    {
      name: 'BBQ Sauce',
      value: 'BBQ Sauce',
      image: 'sauce3redy.png',
      formControlName: 'sauce',
    },
    {
      name: 'Marinara Sauce',
      value: 'Marinara Sauce',
      image: 'sauce1redy.png',
      formControlName: 'sauce',
    },
    {
      name: 'Alfredo Sauce',
      value: 'Alfredo Sauce',
      image: 'sauce2redy.png',
      formControlName: 'sauce',
    },
    {
      name: 'Buffalo Sauce',
      value: 'Buffalo Sauce',
      image: 'sauce4redy.png',
      formControlName: 'sauce',
    },
  ];
  return sauceChoices;
}
