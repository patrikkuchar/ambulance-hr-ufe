import { newSpecPage } from '@stencil/core/testing';
import { XkucharpAmbulanceLogin } from '../xkucharp-ambulance-login';

describe('xkucharp-ambulance-login', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XkucharpAmbulanceLogin],
      html: `<xkucharp-ambulance-login></xkucharp-ambulance-login>`,
    });
    expect(page.root).toEqualHtml(`
      <xkucharp-ambulance-login>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xkucharp-ambulance-login>
    `);
  });
});
