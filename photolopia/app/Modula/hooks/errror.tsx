import { create } from "zustand";

interface ErrorModule {
  error: string[];
  iserror: boolean;
  setIserror: () => void;
  setError: (value: string[]) => void;
}

// ✅ Export as a hook (naming convention: useX)
export const useValidationError = create<ErrorModule>((set) => ({
  error: [],
  iserror: false,
  setIserror: () => set({ iserror: true }),
  setError: (value) => set({ error: value }),
}));
