export type GoogleBooksResponse = {
    items: VolumeInfo[]
}

export type VolumeInfo = {
    title: string;
    authors: string[];
    description: string;
    pageCount: number;
    categories: string[];
    imageLinks: ImageLinks;
}

type ImageLinks = {
    thumbnail: string;
}
