import axios from "axios";

interface PositionType {
  lng: number;
  lat: number;
}

export const api = axios.create({
  baseURL: "http://172.30.1.25:8000",
  responseType: "json",
});

export const userApi = {
  getInfo: (userPk: string) =>
    api.get(`/api/v1/users/${userPk}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhWjFublJOQkZOVGJ5ck10IiwiaWF0IjoxNjM2NzM5MzQ3LCJuYmYiOjE2MzY3MzkzNDcsImV4cCI6MTYzNzM0NDE0NywidXNlciI6eyJvaWQiOiI2MThlOTBiMWMxZDdkNjU4NDQ0NWY2MWYiLCJpZCI6InN0cmluZyIsIm5hbWUiOiJcdWQxNGNcdWMyYTRcdWQyYjgifX0.P-YUyQFOPsS_nzXzECyYZVR9Z8PuWG7Ex3RtULs2ekY",
      },
    }),

  createDestination: (userPk: string, destination: PositionType) => {
    api.post(
      `/api/v1/users/${userPk}/destination`,
      { lng: destination.lng, lat: destination.lat },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhWjFublJOQkZOVGJ5ck10IiwiaWF0IjoxNjM2NzM5MzQ3LCJuYmYiOjE2MzY3MzkzNDcsImV4cCI6MTYzNzM0NDE0NywidXNlciI6eyJvaWQiOiI2MThlOTBiMWMxZDdkNjU4NDQ0NWY2MWYiLCJpZCI6InN0cmluZyIsIm5hbWUiOiJcdWQxNGNcdWMyYTRcdWQyYjgifX0.P-YUyQFOPsS_nzXzECyYZVR9Z8PuWG7Ex3RtULs2ekY",
        },
      }
    );
  },
};
