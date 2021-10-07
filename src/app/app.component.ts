import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { merge, Observable } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'guards';
  isLoading$: Observable<boolean>;
  private showLoaderEvents: Observable<boolean>;
  private hideLoaderEvents: Observable<boolean>;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.showLoaderEvents = this.router.events.pipe(
      filter((e) => e instanceof ResolveStart),
      //everything emited will be transformed to true
      mapTo(true)
    );

    this.hideLoaderEvents = this.router.events.pipe(
      filter((e) => {
        return e instanceof ResolveEnd;
      }),
      mapTo(false)
    );
    //prvo ce biti true pa false

    this.isLoading$ = merge(this.hideLoaderEvents, this.showLoaderEvents);
  }
}
