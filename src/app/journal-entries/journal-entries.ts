import { Guid } from "guid-typescript";

export interface JournalEntry {
    id: Guid; 
    title: string;
    text: string;
    type: ReflectionType;
    createdAt: Date;
  }

export enum ReflectionType {
    Open = 'Open',
    Guided = 'Guided',
}

export const ENTRIES: JournalEntry[] = [
    {
        id: Guid.parse('d0810cef-1389-4f9e-aeb4-41a11561f1d1'),
        title: 'Morning Thoughts',
        text: 'Today I am excited to go out to the coast to spend some time surfing. Its great to get away.',
        type: ReflectionType.Open,
        createdAt: new Date(2020, 8, 1, 10, 5)
    },
    {
        id: Guid.parse('a3098d24-a6ff-43ee-bb5f-8dda002bb84e'),
        title: 'Starting the Day With Positivity',
        text: 'Yoga was a wonderful way to start the day. It brought peace and relaxation into my life.',
        type: ReflectionType.Open,
        createdAt: new Date(2020, 7, 19, 20, 22)
    },
    {
        id: Guid.parse('3cc64db2-ebbd-41f9-8f31-eabecd3e9fc7'),
        title: 'A Great Day Spent Fishing',
        text: 'I woke up at 4:45am and headed down to the river. The sunrise was gorgeous, illuminating Mt. Hood first. I am especially grateful for the 25lb chinook salmon that I landed in the first thiry minutes of fishing.',
        type: ReflectionType.Open,
        createdAt: new Date(2020, 4, 27, 9, 33)
    },
]