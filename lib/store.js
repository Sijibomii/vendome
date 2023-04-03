import { create }from 'zustand'
 
// https://www.npmjs.com/package/zustand
export const useStore = create((set, get) => ({
    locomotive: undefined,
    setLocomotive: (locomotive) => set({ locomotive }),
}))