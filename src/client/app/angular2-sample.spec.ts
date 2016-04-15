import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Angular2SampleApp} from '../app/angular2-sample';

beforeEachProviders(() => [Angular2SampleApp]);

describe('App: Angular2Sample', () => {
  it('should have the `defaultMeaning` as 42', inject([Angular2SampleApp], (app: Angular2SampleApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Angular2SampleApp], (app: Angular2SampleApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

