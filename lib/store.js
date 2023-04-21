import { create } from 'zustand'
 
// https://www.npmjs.com/package/zustand
export const useStore = create((set, get) => ({
    locomotive: undefined,
    setLocomotive: (vl) => set((state) => ({ ...state, locomotive: vl})),
    vlocomotive: undefined,
    setVLocomotive: (vl) => set((state) => ({ ...state, vlocomotive: vl})) 
}))