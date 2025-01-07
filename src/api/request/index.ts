import { IForm } from "../../types";
import { http } from "../http/http";

export const request_getsections = async () => {
  return await http.get("/api/v1/section");
};

export const request_getsection_image = async (id: number) => {
  return await http.get(`/api/v1/section/${id}/image`);
};

export const request_contact = async (data: IForm) => {
  return await http.post("/v1/contact", data);
};
