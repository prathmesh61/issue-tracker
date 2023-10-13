export type ValidationForm = {
  title: string;
  description: string;
  link: string;
  prority: "NORMAL" | "MEDIUM" | "HIGH";
};

export type IssueType = {
  description: string;
  title: string;
  link: string;
  prority: string;
  email: string;
  id: number;
};
