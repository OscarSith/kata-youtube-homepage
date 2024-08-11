import { Component, inject } from '@angular/core';
import { VideoCategoryService } from '../services/video-category.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public videoCategoryService = inject(VideoCategoryService);
}
