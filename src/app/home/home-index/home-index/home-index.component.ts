import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@Component({
  selector: 'app-home-index',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home-index.component.html',
  styleUrl: './home-index.component.css'
})
export class HomeIndexComponent {

}

