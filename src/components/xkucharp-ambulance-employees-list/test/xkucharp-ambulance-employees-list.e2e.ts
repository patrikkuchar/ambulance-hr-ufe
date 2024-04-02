import { newE2EPage } from '@stencil/core/testing';

describe('xkucharp-ambulance-employees-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkucharp-ambulance-employees-list></xkucharp-ambulance-employees-list>');

    const element = await page.find('xkucharp-ambulance-employees-list');
    expect(element).toHaveClass('hydrated');
  });
});
