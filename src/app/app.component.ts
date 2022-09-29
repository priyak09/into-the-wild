import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faPlane } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {

  title = 'into-the-wild';
  location = "";
  preference = "";
  month = '';
  placesArr: string[] = [];
  hoverLoc = "";
  hoverPlace = "";
  faPlane = faPlane;
  scroll = false;
  imgs = document.images;
  len = this.imgs.length;
  counter = 0;
  monthArr = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  monthData = {
    jan: {
      north: ['Manali', 'Jaipur', 'Kasol', 'Auli'],
      south: ['Gokarna', 'Munnar', 'Pondicherry', 'Andaman & Nicobar', 'Alleppey'],
      east: ['Darjeeling', 'Sikkim', 'Tawang'],
      west: ['Goa', 'Kutch', 'Daman & Diu'],
      surprise: ['Chandigarh - Manali - Kasol', 'Jaipur', 'Alleppey']
    },
    feb: {
      north: ['Manali', 'Jaipur', 'Kasol', 'Auli'],
      south: ['Gokarna', 'Munnar', 'Pondicherry', 'Andaman & Nicobar', 'Alleppey'],
      east: ['Darjeeling', 'Sikkim', 'Tawang'],
      west: ['Goa', 'Kutch', 'Daman & Diu'],
      surprise: ['Chandigarh - Manali - Kasol', 'Jaipur', 'Alleppey']
    },
    march: {
      north: ['Kashmir', 'Jaipur', 'Udaipur'],
      south: ['Kerala', 'Andaman & Nicobar', 'Coorg', 'Ooty'],
      east: ['Gangtok', 'Assam', 'Darjeeling', 'Kolkata', 'Arunachal Pradesh', 'Cherrapunjee'],
      west: ['Goa'],
      surprise: ['Kashmir']
    },
    april: {
      north: ['Kashmir', 'Jaipur', 'Udaipur'],
      south: ['Kerala', 'Andaman & Nicobar', 'Coorg', 'Ooty'],
      east: ['Gangtok', 'Assam', 'Darjeeling', 'Kolkata', 'Arunachal Pradesh', 'Cherrapunjee'],
      west: ['Goa'],
      surprise: ['Cherrapunjee']
    },
    may: {
      north: ['Ladakh', 'Nainital', 'Dharamshala', 'Manali', 'Shimla', 'Kashmir'],
      south: ['Kerala', 'Andaman & Nicobar', 'Ooty', 'Kodaikanal'],
      east: ['Darjeeling', 'Tawang', 'Shillong'],
      west: ['Mahabaleshwar'],
      surprise: ['Shimla', 'Mussoorie']
    },
    june: {
      north: ['Ladakh', 'Nainital', 'Dharamshala', 'Manali', 'Shimla', 'Kashmir'],
      south: ['Kerala', 'Andaman & Nicobar', 'Ooty', 'Kodaikanal'],
      east: ['Darjeeling', 'Tawang', 'Shillong'],
      west: ['Mahabaleshwar'],
      surprise: ['Shimla', 'Mussoorie']
    },
    july: {
      north: ['Ladakh', 'Kasol', 'Valley of Flowers, Uttarakhand', 'Udaipur', 'Dharamshala', 'Spiti Valley'],
      south: ['Kerala', 'Kodaikanal'],
      east: ['Gangtok', 'Shillong'],
      west: ['Lonavala', 'Panchgani', 'Malshej Ghat'],
      surprise: ['Kodaikanal']
    },
    aug: {
      north: ['Ladakh', 'Udaipur', 'Jaipur', 'Valley of Flowers, Uttarakhand', 'Mount Abu'],
      south: ['Kerala', 'Coorg', 'Ooty', 'Kodaikanal'],
      east: ['Darjeeling', 'Cherrapunjee'],
      west: ['Daman & Diu'],
      surprise: ['Darjeeling']
    },
    sept: {
      north: ['Kashmir', 'Nainital', 'Agra', 'Dharamshala'],
      south: ['Coorg', 'Mahabalipuram'],
      east: ['Kolkata', 'Shillong', 'Cherrapunjee'],
      west: ['Goa', 'Daman & Diu'],
      surprise: ['Coorg']
    },
    oct: {
      north: ['Kashmir', 'Nainital', 'Agra', 'Dharamshala'],
      south: ['Coorg', 'Mahabalipuram'],
      east: ['Kolkata', 'Shillong', 'Cherrapunjee'],
      west: ['Goa', 'Daman & Diu'],
      surprise: ['Goa']
    },
    nov: {
      north: ['Shimla', 'Manali'],
      south: ['Alleppey', 'Pondicherry', 'Gokarna', 'Chikmagalur'],
      east: ['Shillong'],
      west: ['Jaisalmer', 'Bharatpur', 'Alibaug', 'Goa'],
      surprise: ['Pondicherry']
    },
    dec: {
      north: ['Shimla', 'Manali', 'Kasol'],
      south: ['Alleppey', 'Pondicherry', 'Gokarna', 'Chikmagalur'],
      east: ['Shillong'],
      west: ['Jaisalmer', 'Bharatpur', 'Alibaug', 'Goa', 'Jaipur'],
      surprise: ['Chandigarh - Manali - Kasol', 'Jaipur', 'Alleppey']
    }
  };

  setMonth(month: string) {
    this.month = month.toLowerCase();
    if (this.location) {
      this.setLocation(this.location);
    }
  }

  setLocation(loc: string) {   
    this.location = loc;
    switch (this.month) {
      case 'jan': {
        this.getData(this.monthData.jan, loc);
        break;
      }
      case 'feb': {
        this.getData(this.monthData.feb, loc);
        break;
      }
      case 'march': {
        this.getData(this.monthData.march, loc);
        break;
      }
      case 'april': {
        this.getData(this.monthData.april, loc);
        break;
      }
      case 'may': {
        this.getData(this.monthData.may, loc);
        break;
      }
      case 'june': {
        this.getData(this.monthData.june, loc);
        break;
      }
      case 'july': {
        this.getData(this.monthData.july, loc);
        break;
      }
      case 'aug': {
        this.getData(this.monthData.aug, loc);
        break;
      }
      case 'sept': {
        this.getData(this.monthData.sept, loc);
        break;
      }
      case 'oct': {
        this.getData(this.monthData.oct, loc);
        break;
      }
      case 'nov': {
        this.getData(this.monthData.nov, loc);
        break;
      }
      case 'dec': {
        this.getData(this.monthData.dec, loc);
        break;
      }
    }
  }

  getData(monthwiseData: any, location: string) {
    switch (location) {
      case 'north': {
        this.placesArr = monthwiseData.north;
        break;
      }
      case 'south': {
        this.placesArr = monthwiseData.south;
        break;
      }
      case 'east': {
        this.placesArr = monthwiseData.east;
        break;
      }
      case 'west': {
        this.placesArr = monthwiseData.west;
        break;
      }
      case 'surprise': {
        this.placesArr = monthwiseData.surprise;
      }
    }
  }

  mouseEnter(region: string) {
    this.hoverLoc = region;
  }

  mouseLeave() {
    this.hoverLoc = "";
  }

}
