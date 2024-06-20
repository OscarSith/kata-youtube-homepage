import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniGuideDrawerComponent } from './mini-guide-drawer.component';

describe('MiniGuideDrawerComponent', () => {
  let component: MiniGuideDrawerComponent;
  let fixture: ComponentFixture<MiniGuideDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniGuideDrawerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniGuideDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
