export default interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    get: {
      lat: string;
      lng: string;
    };
  };
}
