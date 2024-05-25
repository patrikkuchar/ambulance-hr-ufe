import { newE2EPage } from '@stencil/core/testing';

describe('xkucharp-ambulance-login', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkucharp-ambulance-login></xkucharp-ambulance-login>');

    const element = await page.find('xkucharp-ambulance-login');
    expect(element).toHaveClass('hydrated');
  });
});
