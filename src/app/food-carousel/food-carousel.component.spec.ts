import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCarouselComponent } from './food-carousel.component';

describe('FoodCarouselComponent', () => {
  let component: FoodCarouselComponent;
  let fixture: ComponentFixture<FoodCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
