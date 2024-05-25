import { newE2EPage } from '@stencil/core/testing';

describe('xkucharp-ambulance-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkucharp-ambulance-app></xkucharp-ambulance-app>');

    const element = await page.find('xkucharp-ambulance-app');
    expect(element).toHaveClass('hydrated');
  });
});
