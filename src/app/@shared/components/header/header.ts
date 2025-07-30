import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { toSignal } from '@angular/core/rxjs-interop';
import BaseComponent from '../base/base';
import { SubjectsService } from '@base/@main/features/subjects/services/subjects';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatInputModule, MatFormField, ReactiveFormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export default class HeaderComponent {
  private _subjectsService = inject(SubjectsService);

  searchControl = this._subjectsService.searchControl;
}
