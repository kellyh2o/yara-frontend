export interface ReflectionResponse {
    _id: string; 
    title: string;
    text: string;
    type: ReflectionType;
    createdAt: Date;
}

export enum ReflectionType {
    Open = 'Open',
    Guided = 'Guided',
}