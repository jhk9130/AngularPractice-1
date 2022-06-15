import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.sass']
  styles: [`
    $primary-color: #1E90FF
    h3 
      color: $primary-color

  `]
})
export class AppComponent {
  title = 'my-second-app';
}
