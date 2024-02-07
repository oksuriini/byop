export class ToppingChoice {
  public name: string;
  public image: string;
  public id: number;

  constructor(name: string, image: string, id: number) {
    this.name = name;
    this.image = image;
    this.id = id;
  }
}

export function getToppings() {
  const choiceList: ToppingChoice[] = [
    {
      name: 'Pepperoni',
      image: 'pepperoniready.png',
      id: 1,
    },
    {
      name: 'Lettuce',
      image: 'lettuceready.png',
      id: 2,
    },
    {
      name: 'Chicken',
      image: 'chickenready.png',
      id: 3,
    },
    {
      name: 'Pineapple',
      image: 'pineappleready.png',
      id: 4,
    },
    {
      name: 'Strawberry',
      image: 'strawberryready.png',
      id: 5,
    },
  ];
  return choiceList;
}

export function getToppingPicturesById(id: number[]): string[] {
  const toppings: ToppingChoice[] = getToppings();
  console.log(id);
  let toppingPics: string[] = [];
  for (let index = 0; index < id.length; index++) {
    toppings.forEach((element) => {
      if (element.id == id[index]) {
        toppingPics.push(element.image);
      }
    });
  }
  return toppingPics;
}
