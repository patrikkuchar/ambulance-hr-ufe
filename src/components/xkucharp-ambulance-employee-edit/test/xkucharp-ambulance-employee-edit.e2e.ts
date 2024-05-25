import { newE2EPage } from '@stencil/core/testing';

describe('xkucharp-ambulance-employee-edit', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkucharp-ambulance-employee-edit></xkucharp-ambulance-employee-edit>');

    const element = await page.find('xkucharp-ambulance-employee-edit');
    expect(element).toHaveClass('hydrated');
  });
});
