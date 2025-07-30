export interface Resource {
  _id: string;
  name: string;
  link: string;
}

export interface Subject {
  _id: string;
  title: string;
  id: string;
  description: string;
  syllabus: string;
  book: string;
  notebooks: Resource[];
  videos: Resource[];
  testBanks: Resource[];
  owner: string;
  __v: number;
}
