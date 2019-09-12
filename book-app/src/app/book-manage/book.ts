export class Book {
    id: number;
    title: string;
    author: string;
    number: number;
    date: {
        day: number,
        month: number,
        year: number,
    }
}