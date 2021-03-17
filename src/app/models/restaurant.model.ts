export default class Restaurant {
  _id!: string;
  name!: string;
  menu!: {
    name: string;
    details: {
      dish: string;
      price: number;
    }[];
  };
}
