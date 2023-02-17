import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsViewComponent } from './artists-view.component';

describe('ArtistsViewComponent', () => {
  let component: ArtistsViewComponent;
  let fixture: ComponentFixture<ArtistsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ArtistsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
