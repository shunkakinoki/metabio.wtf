import { atom } from "recoil";

export const mirrorProfileAtom = atom<any[]>({
  default: [],
  key: "mirrorProfile",
});

export const mirrorArticlesAtom = atom<{
  [x: string]: any;
}>({
  default: [],
  key: "mirrorArticles",
});
