import create from 'zustand'
import English from '../locales/en.json'
type Store = {
    locale: Locale | null,
    setLocale: (loc: Locale | null | undefined) => void
}

interface Locale {
    loading: Load
}

interface Load {
    crawling: string,
    search: string,
    taking_imgs: string,
    looking: string,
    analyze: string,
    report: string
}

const useLocale = create<Store>((set) => ({
    locale: English,
    setLocale: (loc: Locale | null | undefined) => set(() => ({ locale: loc }))
}))


export default useLocale