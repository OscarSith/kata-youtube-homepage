import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [NgClass],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
  hasFocus = '';

  toggleInputSearchFocus(event: FocusEvent): void {
    this.hasFocus = event.type === 'focus' ? 'has-focus' : '';
  }
}
