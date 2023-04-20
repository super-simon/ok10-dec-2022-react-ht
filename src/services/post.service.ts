type IRes = Promise<Response>;

export const postService = {
  getAll: (): IRes => fetch("https://jsonplaceholder.typicode.com/posts"),
  getById: (id: number): IRes =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
  getByUserId: (id: number): IRes =>
    fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`),
};
