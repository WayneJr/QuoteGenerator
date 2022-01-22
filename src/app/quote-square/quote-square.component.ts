import { Component, OnInit, Renderer2 } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-quote-square',
  templateUrl: './quote-square.component.html',
  styleUrls: ['./quote-square.component.css']
})
export class QuoteSquareComponent implements OnInit {
  // MVC design pattern
  // M- Model, V- View, C- Controller
  faQuoteLeft = faQuoteLeft;
  faTwitter = faTwitter;
  faFacebook = faFacebook;

  quote = {
    quote: 'Loading...',
    author: 'Loading...'
  };

  twitterUrl: string = '';

  colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  constructor(private quoteService: QuoteService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.quoteService.getQuotes().subscribe((data: any) => {
      this.quote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
      this.twitterUrl = 'https://twitter.com/intent/tweet?hashtags=QuoteGen&related=freecodecamp&text=' +
        encodeURIComponent('"' + this.quote.quote + '" \n -' + this.quote.author);
        console.log(this.twitterUrl);
    });

    // Functionality to change colors on the facebook and twitter icons
    // as well as the next-quote button and the background.
    const color: string = this.colors[Math.floor(Math.random() * this.colors.length)];

    this.renderer.setStyle(document.body, "background", color);
    this.renderer.setStyle(document.getElementById('twitter'), "background", color);
    this.renderer.setStyle(document.getElementById('facebook'), "background", color);
    this.renderer.setStyle(document.getElementById('next-quote'), "background", color);
  }

  nextQuote(): void {
    this.quoteService.getQuotes().subscribe((data: any) => {
      this.quote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
      this.twitterUrl = 'https://twitter.com/intent/tweet?hashtags=QuoteGen&related=freecodecamp&text=' +
        encodeURIComponent('"' + this.quote.quote + '" ' + this.quote.author);
        console.log(this.twitterUrl);
    });

    
    // Functionality to change colors on the facebook and twitter icons
    // as well as the next-quote button and the background.
    const color: string = this.colors[Math.floor(Math.random() * this.colors.length)];

    this.renderer.setStyle(document.body, "background", color);
    this.renderer.setStyle(document.getElementById('twitter'), "background", color);
    this.renderer.setStyle(document.getElementById('facebook'), "background", color);
    this.renderer.setStyle(document.getElementById('next-quote'), "background", color);
  }

}
