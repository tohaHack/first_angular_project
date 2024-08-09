import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './template.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
