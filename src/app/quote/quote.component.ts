import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote [] = [
    {
      name: "Jacinta",
      quote: "You are not like them becouse you are you.",
      author: "Florence",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
