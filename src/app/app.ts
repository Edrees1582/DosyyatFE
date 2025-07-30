import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  title = 'dosyyat';

  #http = inject(HttpClient);

  ngOnInit() {
    this.#http.get('http://localhost:3030/subjects').subscribe(console.log);
  }
}
