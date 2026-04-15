import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-what-included',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './what-included.component.html',
  styleUrl: './what-included.component.css'
})
export class WhatIncludedComponent {}
