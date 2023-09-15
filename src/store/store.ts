import { create } from "zustand";

interface LibraryState {
  books: any[];
  authors: any[];
  user: any;
}

const useLibraryStore = create<LibraryState>()((_set) => ({
  books: [],
  authors: [],
  user: {},
}));

export default useLibraryStore;
