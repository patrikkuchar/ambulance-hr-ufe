import {Component, Host, h, Prop, Event, EventEmitter, State} from '@stencil/core';
import {HRManagementApiFactory, UserList} from "../../api/ambulance-hr";

@Component({
  tag: 'xkucharp-ambulance-employees-list',
  styleUrl: 'xkucharp-ambulance-employees-list.css',
  shadow: true,
})
export class XkucharpAmbulanceEmployeesList {
  @Event({ eventName: "edit-clicked"}) editClicked: EventEmitter<string>;
  @Event({ eventName: "add-clicked"}) addClicked: EventEmitter<string>;

  @Prop() apiBase: string;

  @State() emptyList: boolean = false;

  userLists: UserList[];

  private async getUsersAsync(): Promise<UserList[]> {
    try {
      const response = await HRManagementApiFactory(undefined, this.apiBase).getUsers();
      if (response.status < 299) {
        this.userLists = response.data;
        this.emptyList = this.userLists.length === 0;
      }
    } catch (err: any) {
      // no strong dependency on conditions
    }

    return this.userLists || [];
  }

  async componentWillLoad() {
    this.userLists = await this.getUsersAsync();
  }

  render() {
    return (
      <Host>
        <md-list>
          {this.emptyList ?
            <md-list-item>
              <div slot="headline">No users found. Please add some.</div>
              <md-icon slot="end"
                       className="pointer-cursor"
                       onclick={() => this.addClicked.emit()}>person_add
              </md-icon>
            </md-list-item>
            :
            <md-list-item>
              <md-icon slot="end"
                       className="pointer-cursor"
                       onclick={() => this.addClicked.emit()}>person_add
              </md-icon>
            </md-list-item>}
          {this.userLists && this.userLists.map(user =>
            <md-list-item>
              <div slot="headline">{user.name}</div>
              <div slot="supporting-text">{user.role + " at " + user.department}</div>
              <md-icon slot="start">person</md-icon>
              <md-icon slot="end"
                       className="pointer-cursor"
                       onclick={() => this.editClicked.emit(user.id)}>edit
              </md-icon>
            </md-list-item>
          )}
        </md-list>
      </Host>
    );
  }

}
