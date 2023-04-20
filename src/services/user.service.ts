type IRes = Promise<Response>;

export const userService = {
  getAll: (): IRes => fetch("https://jsonplaceholder.typicode.com/users"),
  // getById: (id: number): IRes<userInterface> =>
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
};
