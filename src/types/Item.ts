type Item = {
    title: string,
    score: number,
    description: string,
    actionItems: string[],
    subactionItems: string[],
}

export type SeoItem = {
    desc: string,
    tags: Tag[],
    score: number
}

type Tag = {
    tagType: string,
    txt: string
}


export type Recomendation = {
    title_tag: RecomendationItem,
    meta_description: RecomendationItem,
    alt_attributes: RecomendationItem,
    content_length: string,
    keyword_optimization: string
}

type RecomendationItem = {
    status: string,
    recommendation: string
}

type ReportSEO = {
    general_recommendations : Recomendation
}

export type ReportData = {
    analysis : Item[],
    seo : SeoItem,
    is_paid : boolean,
    url : string,
    report : ReportSEO
}



export default Item