const baseURL = "https://jsonplaceholder.typicode.com/";

const urls = {
  todos: "/todos",
  albums: "/albums",
  comments: "/comments",
  posts: "/posts",
  postById: (id: number) => "/posts/" + id,
};

export { baseURL, urls };
