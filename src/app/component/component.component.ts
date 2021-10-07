import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
})
export class ComponentComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedROuter: ActivatedRoute
  ) {}
  user$;
  ngOnInit(): void {
    this.user$ = this.activatedROuter.snapshot.data['user'];
    console.log(this.user$);
  }
}
