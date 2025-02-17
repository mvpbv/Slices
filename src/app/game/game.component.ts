import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  board: number[][] = Array(24).fill(null).map(() => Array(6).fill(0));
  options: number[][] = Array(3).fill(null).map(() => Array(6).fill(0));
}
