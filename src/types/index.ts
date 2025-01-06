export interface ISection {
  id: number;
  title: string;
  color: string;
  hasImage: boolean;
  description: string;
  posts: any[];
  sectionType: "ABOUT" | "PROJECT" | "SERVICE" | "OPERATION" | "NEWS";
}
export interface IForm {
  email: string;
  message: string;
}
