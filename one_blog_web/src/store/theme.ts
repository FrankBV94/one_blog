import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface State {
  theme: string
  toggleTheme: () => void
}

export const useThemeStore = create<State>()(persist((set, get) => {
  return {
    theme: 'light',
    toggleTheme: () => {
      const currentTheme = get()
      currentTheme.theme === 'light' ? set({ theme: 'dark' }) : set({ theme: 'light' })
    }
  }
}, {
  name: 'theme-storage', // name of the item in the storage (must be unique)
  storage: createJSONStorage(() => sessionStorage) // (optional) by default, 'localStorage' is used
}))
