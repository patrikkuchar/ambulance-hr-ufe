import { newSpecPage } from '@stencil/core/testing';
import { XkucharpAmbulanceApp } from '../xkucharp-ambulance-app';

describe('xkucharp-ambulance-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XkucharpAmbulanceApp],
      html: `<xkucharp-ambulance-app></xkucharp-ambulance-app>`,
    });
    expect(page.root).toEqualHtml(`
      <xkucharp-ambulance-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xkucharp-ambulance-app>
    `);
  });
});
