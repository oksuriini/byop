export class BaseChoice {
  public name: string;
  public image: string;
  public value: string;
  public id: string;
  public formControlName: string;

  constructor(
    name: string,
    image: string,
    value: string,
    id: string,
    formControlName: string,
  ) {
    this.name = name;
    this.image = image;
    this.value = value;
    this.id = id;
    this.formControlName = formControlName;
  }
}

// Add new pizza bases under "baseChoice"
export function getBases(): BaseChoice[] {
  const baseChoice: BaseChoice[] = [
    {
      name: 'Thincrust Pizza',
      image: 'pizza_base2ready.png',
      value: 'Thincrust Pizza',
      id: 'thin',
      formControlName: 'base',
    },
    {
      name: 'Pan Pizza',
      image: 'pizza_base1ready.png',
      value: 'Pan Pizza',
      id: 'pan',
      formControlName: 'base',
    },
    {
      name: 'Neapolitan Pizza',
      image: 'pizza_base3ready.png',
      value: 'Neapolitan Pizza',
      id: 'neapolitan',
      formControlName: 'base',
    },
    {
      name: 'Sheetpan Pizza',
      image: 'pizza_base4ready.png',
      value: 'Sheetpan Pizza',
      id: 'square',
      formControlName: 'base',
    },
  ];

  return baseChoice;
}
