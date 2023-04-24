function ApiService(this: any, endpoint: string) {
  this.getAllData = (): Promise<any> =>
    fetch(`https://jsonplaceholder.typicode.com/${endpoint}`).then((value) =>
      value.json()
    );
  this.getSingleData = (id: number): Promise<any> =>
    fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`).then(
      (value) => value.json()
    );
}

export default ApiService;
