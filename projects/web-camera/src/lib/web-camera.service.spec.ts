import { TestBed } from '@angular/core/testing';

import { WebCameraService } from './web-camera.service';

describe('WebCameraService', () => {
  let service: WebCameraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebCameraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
