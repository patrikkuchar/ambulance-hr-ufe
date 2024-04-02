import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'xkucharp-ambulance-employees-list',
  styleUrl: 'xkucharp-ambulance-employees-list.css',
  shadow: true,
})
export class XkucharpAmbulanceEmployeesList {

  employees: any[];

  private async getEmployeesAsync() {
    return await Promise.resolve(
      [
        {
          id: "1",
          name: "John Doe",
          role: "Paramedic",
          phone: "123456789",
          email: "john.doe@gmail.com"
        },
        {
          id: "2",
          name: "Jane Doe",
          role: "Nurse",
          phone: "987654321",
          email: "jane.doe@gmail.com"
        }
      ]
    )
  }

  async componentWillLoad() {
    this.employees = await this.getEmployeesAsync();
  }

  render() {
    return (
      <Host>
        <md-list>
          {this.employees.map(employee =>
            <md-list-item>
              <div slot="headline">{employee.name}</div>
              <md-icon slot="start">person</md-icon>
            </md-list-item>
          )}
        </md-list>
      </Host>
    );
  }

}
