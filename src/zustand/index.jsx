import { create } from "zustand";

export const useOwnStore = create((set) => ({
  labs: [],
  setLabs: (data) => set(() => ({ labs: data })),
}));
