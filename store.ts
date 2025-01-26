import { create } from 'zustand'
type CounterStore = {
  count: number
  increment: () => void
  AsyncIncrement: () => Promise<void>
  decrement: () => void
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 20,
  increment: () => {
    set((state) => ({ count: state.count + 1 }))
  },
  AsyncIncrement: async () => {
    await new Promise((resolver) => setTimeout(resolver, 1000))
    set((state) => ({ count: state.count + 1 }))
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }))
  },
}))
