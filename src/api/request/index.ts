import { http } from "../http/http";

export const request_getsections = async () => {
  return await http.get("/section");
};
export const request_getsection_image = async (id: number) => {
  return await http.get(`/section/${id}/image`);
};
