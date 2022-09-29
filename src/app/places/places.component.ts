import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  @Input() placesArr: any;
  len = 0;
  counter = 0;
  loading = true;

  constructor() { }

  ngOnInit(): void {
   
  }

  ngOnChanges(changes: SimpleChanges) {
    setTimeout( () => {
      if (changes['placesArr']) {
        this.counter = 0;
        const imgs = document.images;
        this.len = imgs.length;
        for (let img of imgs) {
          if (img.complete) {
            this.incrementCounter();
          }
          else {
            img.addEventListener('load', this.incrementCounter, false);
          }  
        }
      }
    }, 100);
   
}

incrementCounter() {
  this.counter++;
  if (this.counter === this.len) {
    this.loading = false;
  }
}

}
