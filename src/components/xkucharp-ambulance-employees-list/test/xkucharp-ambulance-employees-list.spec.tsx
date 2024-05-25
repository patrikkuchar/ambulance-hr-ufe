import { newSpecPage } from '@stencil/core/testing';
import { XkucharpAmbulanceEmployeesList } from '../xkucharp-ambulance-employees-list';

describe('xkucharp-ambulance-employees-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XkucharpAmbulanceEmployeesList],
      html: `<xkucharp-ambulance-employees-list></xkucharp-ambulance-employees-list>`,
    });

    const wlList = page.rootInstance as XkucharpAmbulanceEmployeesList;
    const expectedEmployees = wlList?.userLists?.length;

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedEmployees);
  });
});
