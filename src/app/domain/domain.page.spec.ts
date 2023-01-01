import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { domain } from './domain.page';

describe('domain', () => {
  let component: domain;
  let fixture: ComponentFixture<domain>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [domain],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(domain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
