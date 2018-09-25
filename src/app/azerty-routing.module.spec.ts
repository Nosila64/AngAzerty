import { AzertyRoutingModule } from './azerty-routing.module';

describe('AzertyRoutingModule', () => {
  let azertyRoutingModule: AzertyRoutingModule;

  beforeEach(() => {
    azertyRoutingModule = new AzertyRoutingModule();
  });

  it('should create an instance', () => {
    expect(azertyRoutingModule).toBeTruthy();
  });
});
