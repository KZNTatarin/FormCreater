import { create } from 'zustand'

export const useFormStore = create((set) => ({
    open: false,
    updateOpen: (status) => set((state) => ({ open: status })),
    drawerType: '',
    updateDrawerType: (type) => set((state) => ({ drawerType: type })),
    dates: [],
    updateDates: (data) =>  set((state) => ({ dates: [...state.dates, data] })),
    cleanDates: () => set(() => ({dates: []})),
  }))