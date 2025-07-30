import { Component, inject, OnDestroy, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import HeaderComponent from '../header/header';
import { Subject } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-base',
  imports: [],
  template: '',
})
export default class BaseComponent implements OnDestroy {
  protected _router = inject(Router);
  protected _formBuilder = inject(FormBuilder);

  protected _destroy$ = new Subject<void>();

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
