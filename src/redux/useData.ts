import { create } from "zustand";
import Item, { SeoItem, Recomendation } from "../types/Item";
/* type Item = {
    title: string,
    score: number,
    description: string,
    action: string[],
    subactionItems: string[],
} */


type Data = {
    loading: boolean,
    report: Item[],
    loaded: () => void,
    unloaded: () => void,
    preview: string[],
    seo: SeoItem,
    setReport: (data: Item[], imgs: string[], s: SeoItem) => void,
    recomend: Recomendation,
    setRecomendation: (rec: Recomendation) => void
}




const useData = create<Data>((set) => ({
    loading: false,
    report: [],
    preview: [],
    loaded: () => set(() => ({ loading: true })),
    unloaded: () => set(() => ({ loading: false })),
    seo: {
        score: 0,
        desc: '',
        tags: []
    },
    setReport: (data: Item[], imgs: string[], s: SeoItem) => set(() => ({ report: data, preview: imgs, seo: s })),
    recomend: {
        title_tag: {
            status: "",
            recommendation: ""
        },
        meta_description: {
            status: "",
            recommendation: ""
        },
        alt_attributes: {
            status: "",
            recommendation: ""
        },
        content_length: "",
        keyword_optimization: ""
    },
    setRecomendation: (rec: Recomendation) => set(() => ({
        recomend: rec
    })),
}));


export default useData