import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-maps-loss',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './maps-loss.component.html',
  styleUrl: './maps-loss.component.css'
})
export class MapsLossComponent {}
