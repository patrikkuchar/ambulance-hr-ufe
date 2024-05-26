import {Component, Host, h, State, Prop, Event, EventEmitter} from '@stencil/core';
import {DepartmentEnum, HRManagementApiFactory, RoleEnum, UserEntry} from "../../api/ambulance-hr";

@Component({
  tag: 'xkucharp-ambulance-employee-create',
  styleUrl: 'xkucharp-ambulance-employee-create.css',
  shadow: true,
})
export class XkucharpAmbulanceEmployeeCreate {
  @Event({ eventName: "create-clicked"}) createClicked: EventEmitter<string>;
  @Event({ eventName: "back-clicked"}) backClicked: EventEmitter<string>;

  @Prop() apiBase: string = "http://localhost:8080";

  @State() entry: UserEntry;
  @State() isValid: boolean;
  @State() roles: RoleEnum[] = Object.values(RoleEnum);
  @State() departments: DepartmentEnum[] = Object.values(DepartmentEnum);

  @State() invalidPhone = false;
  @State() emailExists = false;
  @State() missingData = false;
  @State() webApiNotWorking = false;

  private formElement: HTMLFormElement;

  private async initEntry() {
    this.entry = {
      email: "",
      name: "",
      phone: "",
      role: RoleEnum.Doctor,
      department: DepartmentEnum.Gp
    }
  }

  async componentWillLoad() {
    await this.initEntry()
  }

  render() {
    return (
      <Host>
        <form ref={el => this.formElement = el}>
          <md-filled-text-field label="Email"
                                type="email"
                                required
                                value={this.entry?.email}
                                oninput={(ev: InputEvent) => {
                                  if (this.entry) {
                                    this.entry.email = this.handleInputEvent(ev)
                                    this.emailExists = false
                                    this.missingData = false
                                    this.webApiNotWorking = false
                                  }
                                }}>
            <md-icon slot="leading-icon">email</md-icon>
          </md-filled-text-field>

          <md-filled-text-field label="Name"
                                required value={this.entry?.name}
                                oninput={(ev: InputEvent) => {
                                  if (this.entry) {
                                    this.entry.name = this.handleInputEvent(ev)
                                    this.missingData = false
                                    this.webApiNotWorking = false
                                  }
                                }}>
            <md-icon slot="leading-icon">person</md-icon>
          </md-filled-text-field>

          <md-filled-text-field label="Phone"
                                type="tel"
                                required
                                value={this.entry?.phone}
                                oninput={(ev: InputEvent) => {
                                  if (this.entry) {
                                    this.entry.phone = this.handleInputEvent(ev);
                                    this.invalidPhone = false
                                    this.missingData = false
                                    this.webApiNotWorking = false
                                  }
                                }}>
            <md-icon slot="leading-icon">phone</md-icon>
          </md-filled-text-field>

          {this.renderRoleCondition()}

          {this.renderDepartmentCondition()}

          {this.missingData && <div class="error">Missing data</div>}
          {this.emailExists && <div class="error">User with such email already exists</div>}
          {this.invalidPhone &&
            <div class="error">Invalid phone format. Must starts with +4219 or 09 and 8 digits after
              that.<br/> Should be +421 987 654 321 or 0987 654 321</div>}
          {this.webApiNotWorking ? <div class="error">Server is not working</div> : null}

          <div class="button-row">
            <md-filled-button type="submit" disabled={!this.isValid}
                              onclick={() => this.createUser()}>
              Create
            </md-filled-button>
            <md-filled-button type="danger" onClick={() => this.backClicked.emit()}>
              Back
            </md-filled-button>
          </div>


        </form>
      </Host>
    );
  }

  private validatePhone(phone: string): boolean {
    return /^(\+421|0)?\s*9\s*(\d\s*){8}$/.test(phone);
  }

  private handleInputEvent(ev: InputEvent): string {
    const target = ev.target as HTMLInputElement;
    // check validity of elements
    this.isValid = true;
    for (let i = 0; i < this.formElement.children.length; i++) {
      const element = this.formElement.children[i]
      if ("reportValidity" in element) {
        const valid = (element as HTMLInputElement).reportValidity();
        this.isValid &&= valid;
      }
    }

    console.log(this.isValid)
    return target.value
  }

  private renderRoleCondition() {
    return (
      <md-filled-select
        required
        label="Role"
        display-text={this.entry?.role}
        oninput={(ev: InputEvent) => {
          if (this.entry) {
            this.entry.role = this.handleInputEvent(ev) as RoleEnum
            this.missingData = false
            this.webApiNotWorking = false
          }
        }}>
        <md-icon slot="leading-icon">work</md-icon>
        {this.roles.map(role =>
          <md-select-option value={role}>{role}</md-select-option>
        )}
      </md-filled-select>
    );
  }

  private renderDepartmentCondition() {
    return (
      <md-filled-select
        required
        label="Department"
        display-text={this.entry?.department}
        oninput={(ev: InputEvent) => {
          if (this.entry) {
            this.entry.department = this.handleInputEvent(ev) as DepartmentEnum
            this.missingData = false
            this.webApiNotWorking = false
          }
        }}>
        <md-icon slot="leading-icon">home_health</md-icon>
        {this.departments.map(department =>
          <md-select-option value={department}>{department}</md-select-option>
        )}
      </md-filled-select>
    );
  }

  private async createUser() {
    if (!this.isValid) {
      return;
    }

    if (!this.validatePhone(this.entry.phone)) {
      this.invalidPhone = true;
      return;
    }

    // create user
    try {
      const response = await HRManagementApiFactory(undefined, this.apiBase).createUser(this.entry);
      if (response.status < 299) {
        this.createClicked.emit(response.data.id);
      }
    } catch (err: any) {
      if (err.response && err.response.status === 400) {
        this.missingData = true;
        return;
      }
      if (err.response && err.response.status === 409) {
        this.emailExists = true;
        return;
      }
      this.webApiNotWorking = true;
    }
  }

}
