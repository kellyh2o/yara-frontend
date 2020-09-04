import { Guid } from "guid-typescript";

export class JournalEntry { 

    //field 
    Id: Guid; 

    //field 
    Title: string; 

    //field 
    Text: string; 

    //field 
    CreatedAt: Date; 
  
    //constructor 
    constructor(id: Guid, title: string, text: string, createdAt: Date) { 
        this.Id = id;
        this.Title = title; 
        this.Text = text;
        this.CreatedAt = createdAt;
    }
 }