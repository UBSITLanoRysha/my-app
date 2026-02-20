import { Component } from '@angular/core';
import { HomeComponent } from './home/home';
import { UserInteractionComponent } from './user-interaction/user-interaction';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, UserInteractionComponent],
  templateUrl: './app.html',
})
export class App {}