import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksViewComponent } from './tracks-view.component';

describe('TracksViewComponent', () => {
  let component: TracksViewComponent;
  let fixture: ComponentFixture<TracksViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TracksViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
