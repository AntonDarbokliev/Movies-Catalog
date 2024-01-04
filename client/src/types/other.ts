export type FilterValue =  "yearNewest" | "yearOldest" | "a-z" | "z-a" | ''

export interface NewsPiece {
    title:string,
    publishedAt:string,
    description: string,
    url: string,
    source: {
        name:string,
        url:string
    },
    image: string,
    content?: string,

}