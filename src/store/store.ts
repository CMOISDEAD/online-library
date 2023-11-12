import { create } from "zustand";

interface LibraryState {
  books: any[];
  authors: any[];
  categories: any[];
  user: any;
}

const useLibraryStore = create<LibraryState>()((_set) => ({
  books: [],
  authors: [],
  categories: [],
  user: {},
}));

export default useLibraryStore;
