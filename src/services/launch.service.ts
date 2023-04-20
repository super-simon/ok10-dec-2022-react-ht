type IRes = Promise<Response>;

export const launchService = {
  getAll: (): IRes => fetch("https://api.spacexdata.com/v3/launches/"),
};
