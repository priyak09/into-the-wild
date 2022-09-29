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
   this.checkImages();
  }

  ngOnChanges(changes: SimpleChanges) {
    setTimeout( () => {
      if (changes['placesArr']) {
        this.checkImages();
      }
    }, 100);
   
}

checkImages() {
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

incrementCounter() {
  this.counter++;
  if (this.counter === this.len) {
    this.loading = false;
  }
}

}
