import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Provides pipes like 'date'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  appTitle: string = 'Welcome to Angular Lab 3';
  userImageUrl: string = 'assets/images/user-avatar.png';
  isHighlighted: boolean = true;
  currentDate: Date = new Date();
}