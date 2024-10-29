import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTailComponent } from './info-tail.component';

describe('InfoTailComponent', () => {
  let component: InfoTailComponent;
  let fixture: ComponentFixture<InfoTailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
