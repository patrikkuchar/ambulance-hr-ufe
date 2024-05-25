import { newSpecPage } from '@stencil/core/testing';
import { XkucharpAmbulanceEmployeeCreate } from '../xkucharp-ambulance-employee-create';

describe('xkucharp-ambulance-employee-create', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XkucharpAmbulanceEmployeeCreate],
      html: `<xkucharp-ambulance-employee-create></xkucharp-ambulance-employee-create>`,
    });
    expect(page.root).toEqualHtml(`
      <xkucharp-ambulance-employee-create>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xkucharp-ambulance-employee-create>
    `);
  });
});
