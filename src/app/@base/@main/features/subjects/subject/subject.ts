import { Component, effect, inject, input, signal } from '@angular/core';
import BaseComponent from '@shared/components/base/base';
import { takeUntil } from 'rxjs';
import { SubjectsService } from '../services/subjects';
import { Subject } from '../interfaces/subjects.interfaces';
import { NgxSkeletonLoaderComponent } from 'ngx-skeleton-loader';
import { environment } from '@environments/environment.development';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-subject',
  imports: [NgxSkeletonLoaderComponent],
  templateUrl: './subject.html',
  styleUrl: './subject.scss',
})
export default class SubjectComponent extends BaseComponent {
  private _subjectsService = inject(SubjectsService);

  id = input<string | undefined>();

  subject = httpResource<Subject>(() => ({
    url: environment.apiUrl + '/subjects/' + this.id(),
    method: 'GET',
  }));

  constructor() {
    super();
  }
}
