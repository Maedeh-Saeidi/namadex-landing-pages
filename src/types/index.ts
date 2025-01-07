import { ReactNode } from "react";

export interface ISection {
  id: number;
  title: string;
  color: string;
  hasImage: boolean;
  description: string;
  posts: any[];
  sectionType: "ABOUT" | "PROJECT" | "SERVICE" | "OPERATION" | "NEWS";
}

export interface IUpdatedSection extends ISection {
  jsonColor: {
    primaryColor: string;
    secondaryColor: string;
  };
}

export interface IForm {
  email: string;
  message: string;
}

export interface IProps {
  onSuccess?: (resp: any) => void;
  onError?: (err: any) => void;
}

export interface DataProviderProps {
  children: ReactNode;
}

export interface IPost {
  categories: string[];
  description: string;
  hasIcon: boolean;
  hasImg: boolean;
  id: number;
  link: string;
  sectionId: number;
  title: string;
}
