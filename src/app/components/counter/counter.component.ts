import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as counterActions from '../../store/counter/counter.actions';
import { ApiService } from 'src/app/shared/api.service';
import { HttpHeaders } from '@angular/common/http';
import { dataType } from 'src/app/interface/dataType';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  counter$!: Observable<number>;
  data: dataType[] = [];
  constructor(
    private store: Store<{ counter: number }>,
    private apiService: ApiService
  ) {
    this.counter$ = this.store.select('counter');
  }

  ngOnInit(): void {
    const headers = new HttpHeaders();
    this.apiService
      .get('https://jsonplaceholder.typicode.com/todos/', headers)
      .subscribe((response: any) => {
        console.log('response', response);
        this.data = response;
      });
  }

  increment() {
    this.store.dispatch(counterActions.increment());
  }

  decrement() {
    this.store.dispatch(counterActions.decrement());
  }

  reset() {
    this.store.dispatch(counterActions.reset());
  }
}
