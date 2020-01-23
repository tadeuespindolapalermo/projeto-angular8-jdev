import { TestBed } from '@angular/core/testing';

import { GuardiaoGuard } from './guardiao.guard';

describe('GuardiaoGuard', () => {
  let guard: GuardiaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardiaoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
