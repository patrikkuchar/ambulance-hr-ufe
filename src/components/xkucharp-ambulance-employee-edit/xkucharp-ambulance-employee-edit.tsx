import {Component, Host, h, Prop, State, Element, Event, EventEmitter} from '@stencil/core';
import {
  DepartmentDto,
  DepartmentEnum,
  HRManagementApiFactory,
  PersonalDocument,
  PersonalDocumentEntry,
  UserDto, UserManagementApiFactory
} from "../../api/ambulance-hr";

@Component({
  tag: 'xkucharp-ambulance-employee-edit',
  styleUrl: 'xkucharp-ambulance-employee-edit.css',
  shadow: true,
})
export class XkucharpAmbulanceEmployeeEdit {
  @Event({ eventName: "logout-clicked"}) logoutClicked: EventEmitter<string>;
  @Event({ eventName: "back-to-list-clicked"}) backToListClicked: EventEmitter<string>;

  @Element() el: HTMLElement;

  @Prop() apiBase: string;
  @Prop() employeeId: string;
  @Prop() operationType: string;

  @State() employee: UserDto;
  @State() editingDocument: PersonalDocument;

  @State() showNestedList: { [key: string]: boolean } = {};
  @State() editingNestedList: { [key: string]: boolean } = {};
  @State() isAddDocumentEnabled: boolean = true;
  @State() isEditingDocument: boolean = false;

  @State() hrView: boolean;

  @State() departments: DepartmentEnum[] = Object.values(DepartmentEnum);
  @State() selectedDepartment: DepartmentEnum;

  async componentWillLoad() {
    console.log("employeeId: ", this.employeeId)
    this.employee = await this.getEmployee();
    this.selectedDepartment = this.employee.department;
    this.initShowNestedList();
    this.hrView = this.operationType === "HR";
  }

  private initShowNestedList() {
    this.showNestedList = {};
    this.employee.personalDocument.forEach((document: PersonalDocument) => {
      this.showNestedList[document.id] = false;
      this.editingNestedList[document.id] = false;
    });
  }

  private async getEmployee(): Promise<UserDto> {
    console.log("som tu")
    try {
      const response = await HRManagementApiFactory(undefined, this.apiBase).getUser(this.employeeId);

      if (response.status < 299) {
        return response.data;
      }
    }
    catch (err: any) {
      // no strong dependency on conditions
    }
    return undefined;
  }

  private addNewDocument() {
    this.isAddDocumentEnabled = false;
    const newDocument: PersonalDocument = {
      id: 'new', // Replace with a unique ID
      name: 'New Document',
      content: 'New content' // Replace with actual content
    };

    this.employee = {
      ...this.employee,
      personalDocument: [...this.employee.personalDocument, newDocument]
    };

    this.showNestedList[newDocument.id] = true;
    this.editingNestedList[newDocument.id] = true;
    this.editingDocument = JSON.parse(JSON.stringify(newDocument));
  }

  private handleInputEvent(ev: InputEvent): string {
    return (ev.target as HTMLInputElement).value;
  }

  private async handleHrSave() {
    try {
      const body: DepartmentDto = {
        department: this.selectedDepartment
      }

      const response = await HRManagementApiFactory(undefined, this.apiBase).updateUserDepartment(this.employee.id, body);

      if (response.status < 299) {
        this.backToListClicked.emit();
      }
    } catch (err: any) {
      // no strong dependency on conditions
    }
  }

  private async handleHrDelete() {
    try {
      const response = await HRManagementApiFactory(undefined, this.apiBase).deleteUser(this.employee.id);

      if (response.status < 299) {
        this.backToListClicked.emit();
      }
    } catch (err: any) {
      // no strong dependency on conditions
    }
  }

  render() {
    return (
      <Host>
        <sl-card>
          {!this.hrView && (
            <md-list-item>
              <md-icon slot="end"
                       className="pointer-cursor"
                       onclick={() => this.logoutClicked.emit()}>logout
              </md-icon>
            </md-list-item>
          )}
          {this.hrView && (
            <md-list-item>
              <md-icon slot="start"
                       className="pointer-cursor"
                       onclick={() => this.backToListClicked.emit()}>arrow_back
              </md-icon>
              <md-icon slot="end"
                       className="pointer-cursor"
                       onclick={() => this.handleHrSave()}>save
              </md-icon>
              <md-icon slot="end"
                       className="pointer-cursor"
                       onclick={() => this.handleHrDelete()}>delete
              </md-icon>
            </md-list-item>
          )}
          <span class="avatar-icon"><md-icon slot="start">account_circle</md-icon></span>
          <h2>{this.employee.name}</h2>
          <md-list-item>
            <div slot="headline">{this.employee.email}</div>
            <md-icon slot="start">alternate_email</md-icon>
          </md-list-item>
          <md-list-item>
            <div slot="headline">{this.employee.phone}</div>
            <md-icon slot="start">call</md-icon>
          </md-list-item>
          <md-list-item>
            <div slot="headline">{this.employee.role}</div>
            <md-icon slot="start">work</md-icon>
          </md-list-item>
          {this.hrView ? this.renderDepartmentCondition()
          : (
              <md-list-item>
                <div slot="headline">{this.employee.department}</div>
                <md-icon slot="start">home_health</md-icon>
              </md-list-item>
            )}
          <md-list-item className="document-list">
            <md-icon slot="start">folder</md-icon>
            <div slot="headline">Documents</div>
            {this.isAddDocumentEnabled && !this.hrView && (
              <div slot="end" onClick={() => {
                this.addNewDocument();
              }}>
                <md-icon>note_add</md-icon>
              </div>
            )}
          </md-list-item>

          <div class="documents">
            {this.renderDocumentList()}
          </div>
        </sl-card>
      </Host>
    );
  }

  private renderDocumentList() {
    console.log(this.showNestedList);
    return this.employee.personalDocument.map((document: PersonalDocument) => (
      <md-list-item>
        <md-icon slot="start">description</md-icon>
        {this.showNestedList[document.id] ?
          this.renderDocumentItem(document)
          : (
          <div>
            <div slot="headline">{document.name}</div>
          </div>
        )}

        <md-icon slot="end"
                 onClick={() => this.toggleNestedList(document.id)}
                 class="pointer-cursor"
        >{this.showNestedList[document.id] ? "keyboard_arrow_up" : "keyboard_arrow_down"}</md-icon>
      </md-list-item>
    ));
  }

  private renderDocumentItem(document: PersonalDocument) {
    if (!document) {
      return;
    }

    return (
      <md-list-item>
        {this.editingNestedList[document.id] ?
          this.renderDocumentItemEdit()
          : this.renderDocumentItemView(document)}
      </md-list-item>
    );
  }

  private renderDocumentItemView(document: PersonalDocument) {
    if (!document) {
      return;
    }

    return (
      <md-list-item>
        <div class="document-item">
          <h3>{document.name}</h3>
          <p>{document.content}</p>
          {this.renderEditButton(document)}
        </div>
      </md-list-item>
    );
  }

  private renderEditButton(document: PersonalDocument) {
    if (this.hrView) {
      return;
    }

    return this.isEditingDocument ? (
      <md-filled-button type="primary" disabled>Edit</md-filled-button>
    ) : (
      <md-filled-button type="primary" onClick={() => this.editDocument(document)}>Edit</md-filled-button>
    );
  }

  private renderDocumentItemEdit() {
    if (!this.editingDocument) {
      return;
    }

    return (
      <md-list-item>
        <div class="document-item">
          <md-filled-text-field label="Document name"
                                type="text"
                                value={this.editingDocument.name}
                                oninput={(ev: InputEvent) => {
                                  if (this.editingDocument) {
                                    this.editingDocument.name = this.handleInputEvent(ev);
                                  }
                                }}>
          </md-filled-text-field>
          <md-filled-text-field label="Document content"
                                type="textarea"
                                value={this.editingDocument.content}
                                oninput={(ev: InputEvent) => {
                                  if (this.editingDocument) {
                                    this.editingDocument.content = this.handleInputEvent(ev);
                                  }
                                }}>
          </md-filled-text-field>
          <div class="button-row">
            <md-filled-button type="success" onClick={() => this.saveDocument(this.editingDocument)}>
              Save
            </md-filled-button>
            <md-outlined-button type="danger" onClick={() => this.cancelEdit(this.editingDocument)}>
              Cancel
            </md-outlined-button>
          </div>
        </div>
      </md-list-item>
    );
  }

  private editDocument(document: PersonalDocument) {
    this.isEditingDocument = true;
    this.editingNestedList = {
      ...this.editingNestedList,
      [document.id]: true
    };

    this.editingDocument = JSON.parse(JSON.stringify(document));
  }

  private async saveDocument(document: PersonalDocument) {
    this.isEditingDocument = false;
    this.editingNestedList = {
      ...this.editingNestedList,
      [document.id]: false
    };

    if (document.id === 'new') {
      await this.saveNewDocument(document);
    } else {
      await this.saveExistingDocument(document);
    }
  }

  private async saveNewDocument(document: PersonalDocument) {
    const body: PersonalDocumentEntry = {
      name: document.name,
      content: document.content
    }

    try {
      const response = await UserManagementApiFactory(undefined, this.apiBase).addPersonalDocument(this.employee.id, body);

      if (response.status < 299) {
        //parse response where is personal document
        this.employee.personalDocument = [...this.employee.personalDocument.slice(0, -1), response.data];
        this.editingDocument = undefined;
      }
    } catch (err: any) {
      // no strong dependency on conditions
    }
  }

  private async saveExistingDocument(document: PersonalDocument) {
    try {
      const response = await UserManagementApiFactory(undefined, this.apiBase).updatePersonalDocument(this.employee.id, document);

      if (response.status < 299) {
        //parse response where is personal document
        this.employee.personalDocument = this.employee.personalDocument.map((doc) => {
          if (doc.id === document.id) {
            return response.data;
          }
          return doc;
        });
        this.editingDocument = undefined;
      }
    } catch (err: any) {
      // no strong dependency on conditions
    }
  }

  private cancelEdit(document: PersonalDocument) {
    this.isEditingDocument = false;
    this.editingNestedList = {
      ...this.editingNestedList,
      [document.id]: false
    };

    if (document.id === 'new') {
      this.employee.personalDocument = this.employee.personalDocument.filter((doc) => doc.id !== 'new');
      this.isAddDocumentEnabled = true;
    }
  }

  private toggleNestedList(id: string) {
    this.showNestedList = {
      ...this.showNestedList,
      [id]: !this.showNestedList[id]
    };
  }

  private renderDepartmentCondition() {
    return (
      <md-filled-select
        required
        label="Department"
        value={this.selectedDepartment}
        display-text={this.selectedDepartment}
        oninput={(ev: InputEvent) => {
          if (this.selectedDepartment) {
            this.selectedDepartment = this.handleInputEvent(ev) as DepartmentEnum
          }
        }}>
        <md-icon slot="leading-icon">home_health</md-icon>
        {this.departments.map(department =>
          <md-select-option value={department}>{department}</md-select-option>
        )}
      </md-filled-select>
    );
  }
}
