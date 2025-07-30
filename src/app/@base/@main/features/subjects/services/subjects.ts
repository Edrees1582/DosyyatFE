import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { Subject } from '../interfaces/subjects.interfaces';
import { environment } from '@environments/environment';
import { FormControl } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  private _http = inject(HttpClient);

  searchControl = new FormControl<string>('', {
    nonNullable: true,
  });

  searchValueChanges = toSignal(
    this.searchControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(300)
    )
  );

  getSubject(id: string) {
    return this._http.get<Subject>(`${environment.apiUrl}/subjects/${id}`);
  }
}
