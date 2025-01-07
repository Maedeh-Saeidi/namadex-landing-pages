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
