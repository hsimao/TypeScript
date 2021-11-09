import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type petsGroup = "dog" | "cat" | "fish";

interface IPetInfo {
  name: string;
  age: number;
}

type IPets = Record<petsGroup, IPetInfo>;

const animalsInfo: IPets = {
  dog: {
    name: "dogName",
    age: 3
  },
  cat: {
    name: "catName",
    age: 3
  },
  fish: {
    name: "fishName",
    age: 5
  }
};

// 也可擴充
type IPetsExtend = Record<petsGroup | "pig", IPetInfo>;

const animalsInfo2: IPetsExtend = {
  dog: {
    name: "dogName",
    age: 3
  },
  cat: {
    name: "catName",
    age: 3
  },
  fish: {
    name: "fishName",
    age: 5
  },
  pig: {
    name: "pigName",
    age: 5
  }
};

// 封裝 api 請求
enum HttpMethods {
  GET = "get",
  POST = "post",
  DELETE = "delete",
  PUT = "put"
}

const methods = ["get", "post", "delete", "put"];

interface HttpFn {
  <T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

type Http = Record<HttpMethods, HttpFn>;

const httpMethods: Http = methods.reduce((map: any, method: string) => {
  map[method] = (url: string, options: AxiosRequestConfig = {}) => {
    const { data, ...config } = options;

    return (axios as any)
      [method](url, data, config)
      .then((res: AxiosResponse) => {
        if (res.data.errCode) {
          // error handler
        } else {
          // success handler
        }
      });
  };
  return map;
}, {});

// 使用封裝的 api
interface User {
  name: "mars";
  age: 18;
}
async function asyncFn() {
  const onePerson = await httpMethods.get<User>(`/api/users/1`);
  const manyPerson = await httpMethods.get<User[]>("/api/users");
  const updatePerson = await httpMethods.put<User>("/api/users/1");
  const newPerson = await httpMethods.post<User>("/api/users");
  const deletePerson = await httpMethods.post<User>("/api/users/1");
}
