// #docregion
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, startWith } from 'rxjs/operators';

import { TwainService } from './twain.service';

// #docregion component
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'twain-quote',
  templateUrl: './twain.component.html',
  styleUrls: ['./twain.component.scss']
})
export class TwainComponent implements OnInit {
  errorMessage: string;
  quote: Observable<string>;

  constructor(private twainService: TwainService) {}

  ngOnInit(): void {
    this.getQuote();
  }

  // #docregion get-quote
  getQuote() {
    this.errorMessage = '';
    this.quote = this.twainService.getQuote().pipe(
      startWith('...'),
      catchError( (err: any) => {
        // Wait a turn because errorMessage already set once this turn
        setTimeout(() => this.errorMessage = err.message || err.toString());
        return of('...'); // reset message to placeholder
      })
    );
    // #enddocregion get-quote
  }

}
// #enddocregion component
