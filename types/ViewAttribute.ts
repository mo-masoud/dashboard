export enum ViewTypes {
  ID = "id",
  IMAGE = "image",
  STRING = "string",
  EMAIL = "email",
  NUMBER = "number",
}

export interface ViewAttribute {
  label: string;
  value: any;
  type: ViewTypes;
}
