export const searchCover = (code: string, size: string = "L") => {
  return `https://covers.openlibrary.org/b/id/${code}-${size}.jpg`;
};
