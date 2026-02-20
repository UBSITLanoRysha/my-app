import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-interaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-interaction.html',
  styleUrls: ['./user-interaction.css']
})
export class UserInteractionComponent {
  message: string = 'Click the button!';
  clickCount: number = 0;

  onButtonClick(): void {
    this.clickCount++;
    this.message = `Button clicked ${this.clickCount} times!`;
  }

  onMouseEnter(): void {
    this.message = 'Mouse is hovering here!';
  }

  onMouseLeave(): void {
    this.message = 'Mouse left the area!';
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.message = `You typed: ${target.value}`;
  }
}