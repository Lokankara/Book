import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

const SIZE = 25;

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private currentPageSubject: BehaviorSubject<number>;

  private readonly _currentPage$: Observable<number>;

  private _pageSize: number = SIZE;

  constructor() {
    this.currentPageSubject = new BehaviorSubject<number>(1);
    this._currentPage$ = this.currentPageSubject.asObservable();
  }

  get currentPage$(): Observable<number> {
    return this._currentPage$;
  }

  get currentPage(): number {
    let currentPageValue: number;
    this._currentPage$.subscribe(page => {
      currentPageValue = page;
    }).unsubscribe();
    return currentPageValue!;
  }

  setCurrentPage(page: number): void {
    this.currentPageSubject.next(page);
  }

  get pageSize(): number {
    return this._pageSize;
  }
}
