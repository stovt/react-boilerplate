export {}; // ensure this is a module

declare global {
  interface Navigator {
    userLanguage?: string;
  }
}
