import { newSpecPage } from '@stencil/core/testing';
import { XkucharpAmbulanceEmployeeEdit } from '../xkucharp-ambulance-employee-edit';

describe('xkucharp-ambulance-employee-edit', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XkucharpAmbulanceEmployeeEdit],
      html: `<xkucharp-ambulance-employee-edit></xkucharp-ambulance-employee-edit>`,
    });
    expect(page.root).toEqualHtml(`
      <xkucharp-ambulance-employee-edit>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xkucharp-ambulance-employee-edit>
    `);
  });
});
