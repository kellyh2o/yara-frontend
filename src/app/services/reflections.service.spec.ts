import { TestBed } from '@angular/core/testing';

import { ReflectionsService } from './reflections.service';

describe('ReflectionService', () => {
  let service: ReflectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReflectionsService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
