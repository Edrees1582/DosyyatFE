import { HttpClient, httpResource } from '@angular/common/http';
import { Component, effect, inject, signal } from '@angular/core';
import { Subject } from './interfaces/subjects.interfaces';
import { SubjectsService } from './services/subjects';
import BaseComponent from '@shared/components/base/base';
import { takeUntil } from 'rxjs';
import { environment } from '@environments/environment';
import { NgxSkeletonLoaderComponent } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-subjects',
  imports: [NgxSkeletonLoaderComponent],
  templateUrl: './subjects.html',
  styleUrl: './subjects.scss',
})
export default class SubjectsComponent extends BaseComponent {
  private _subjectsService = inject(SubjectsService);

  subjects = httpResource<Subject[]>(() => {
    const params = this._sanitizeParams({
      search: this._subjectsService.searchValueChanges() ?? '',
    });

    return {
      url: environment.apiUrl + '/subjects',
      method: 'GET',
      params,
    };
  });

  constructor() {
    super();
  }

  navigateToSubject(id: string) {
    this._router.navigateByUrl(`/main/subjects/${id}`);
  }

  private _sanitizeParams(params: Record<string, unknown>) {
    const sanitizedParams: Record<string, string> = {};

    for (const key in params) {
      const value = params[key];
      if (value !== null && value !== undefined && value !== '') {
        sanitizedParams[key] = String(value);
      }
    }

    return sanitizedParams;
  }
}
