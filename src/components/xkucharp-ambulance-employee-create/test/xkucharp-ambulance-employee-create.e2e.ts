import { newE2EPage } from '@stencil/core/testing';

describe('xkucharp-ambulance-employee-create', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkucharp-ambulance-employee-create></xkucharp-ambulance-employee-create>');

    const element = await page.find('xkucharp-ambulance-employee-create');
    expect(element).toHaveClass('hydrated');
  });
});
