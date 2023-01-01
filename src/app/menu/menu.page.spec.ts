import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { menu } from './menu.page';

describe('menu', () => {
  let component: menu;
  let fixture: ComponentFixture<menu>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [menu],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(menu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
