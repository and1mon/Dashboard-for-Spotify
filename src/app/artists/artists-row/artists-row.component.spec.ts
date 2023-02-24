import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsRowComponent } from './artists-row.component';

describe('ArtistsRowComponent', () => {
  let component: ArtistsRowComponent;
  let fixture: ComponentFixture<ArtistsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ArtistsRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
