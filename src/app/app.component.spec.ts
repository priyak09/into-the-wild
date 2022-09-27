import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'into-the-wild'`, () => {
    expect(component.title).toEqual('into-the-wild');
  });

  it('should set month', () => {
    component.location = 'north';
    component.setMonth('Jan');
    expect(component.placesArr.length).toEqual(4);
    component.location = 'south';
    component.setMonth('Feb');
    expect(component.placesArr.length).toEqual(5);
    component.location = 'east';
    component.setMonth('March');
    expect(component.placesArr.length).toEqual(6);
    component.location = 'west';
    component.setMonth('April');
    expect(component.placesArr.length).toEqual(1);
    component.location = 'surprise';
    component.setMonth('May');
    expect(component.placesArr.length).toEqual(2);
    component.location = 'north';
    component.setMonth('June');
    expect(component.placesArr.length).toEqual(6);
    component.location = 'south';
    component.setMonth('July');
    expect(component.placesArr.length).toEqual(2);
    component.location = 'east';
    component.setMonth('Aug');
    expect(component.placesArr.length).toEqual(2);
    component.location = 'west';
    component.setMonth('Sept');
    expect(component.placesArr.length).toEqual(2);
    component.location = 'surprise';
    component.setMonth('Oct');
    expect(component.placesArr.length).toEqual(1);
    component.location = 'north';
    component.setMonth('Nov');
    expect(component.placesArr.length).toEqual(2);
    component.location = 'south';
    component.setMonth('Dec');
    expect(component.placesArr.length).toEqual(4);
  });

  it('should  set variable on card hover', () => {
    component.mouseEnter('north');
    expect(component.hoverLoc === 'north');
    component.mouseLeave();
    expect(component.hoverLoc === '');

  })
});
