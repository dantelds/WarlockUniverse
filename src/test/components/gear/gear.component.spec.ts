/* tslint:disable:no-unused-variable */

import { TestBed }      from '@angular/core/testing';

import { By }           from '@angular/platform-browser';
import {GearComponent} from "../../../app/components/gear/gear.component";


////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});
describe('GearComponent with TCB', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [GearComponent]});
  });

  it('should instantiate component', () => {
    let fixture = TestBed.createComponent(GearComponent);
    expect(fixture.componentInstance instanceof GearComponent).toBe(true, 'should create GearComponent');
  });

  // it('should have expected <h1> text', () => {
  //   let fixture = TestBed.createComponent(GearComponent);
  //   fixture.detectChanges();
  //
  //   let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;  // it works
  //
  //       h1 = fixture.debugElement.query(By.css('h1')).nativeElement;            // preferred
  //
  //   expect(h1.innerText).toMatch(/angular app/i, '<h1> should say something about "Angular App"');
  // });
});

