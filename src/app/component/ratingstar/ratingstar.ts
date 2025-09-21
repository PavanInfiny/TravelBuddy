import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-ratingstar',
  imports: [FormsModule, CommonModule],
  templateUrl: './ratingstar.html',
  styleUrl: './ratingstar.css',
})
export class Ratingstar {
  @Input() rating: number = 0;
  maxrating: number = 10;
  displayError: boolean = false;

  ngOnInit(): void {}
  get _incolor(): string {
    if (this.rating <= 2) {
      return 'red';
    }
    return 'gold';
  }
  get numberofstar(): string[] {
    const starsToRender: string[] = [];
    const halfstar: string[] = [];
    const actualStarValue = this.rating;
    if (actualStarValue > 5) {
      this.displayError = true;
    } else {
      const maxVisualStars = 5;
      const first: number = Math.floor(actualStarValue);
      const second: number = actualStarValue % 1;
      for (let i = 1; i <= first; i++) {
        starsToRender.push('full');
      }
    }

    return starsToRender;
  }
  get halfstar(): string[] {
    const thalfstar: string[] = [];
    const actualStarValue = this.rating / 2;
    const second: number = actualStarValue % 1;
    if (actualStarValue > 5) {
      this.displayError = true;
    } else {
      if (second > 0) {
        thalfstar.push('half');
      }
    }
    return thalfstar;
  }
}
