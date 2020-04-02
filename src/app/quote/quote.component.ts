import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  showDescription: boolean = false;

  quotes: Quote [] =[
    {
      name: "Jacinta",
      quote: "Work in silence and let them rejoice your success in public with joiyous noise.",
      author: "Florence",
    },

    {
    name: "Hadren",
    quote: "Find a job you enjoy doing and you will never have to work a day.",
    author: "Hadren",
    },

    {
      name: "Luis",
      quote: "The warmer the blanket the colder the future.",
      author: "Draize",
    },
  ];

  addQuote(quotes){
    quotes.completeDate = new Date(quotes.completeDate);
    this.quotes.push(quotes)

  }
  deleteQuote(index){
    this.quotes.splice(index,1);

  }

  toggleQuote() {
    this.showDescription = !this.showDescription;
  }


  constructor() { }

  ngOnInit(){
  }

}
