import {Component, State, Prop, Event, EventEmitter, Host, h} from '@stencil/core';
import {LoginEntry, UserManagementApiFactory} from "../../api/ambulance-hr";

@Component({
  tag: 'xkucharp-ambulance-login',
  styleUrl: 'xkucharp-ambulance-login.css',
  shadow: true,
})
export class XkucharpAmbulanceLogin {

  @Event({ eventName: "logged-in"}) loggedIn: EventEmitter<string>;

  @Prop() apiBase: string;

  @State() entry: LoginEntry;
  @State() private isValid = false;
  @State() private loginFailed = false;

  private formElement: HTMLFormElement;

  private async initEntry() {
    this.entry = {
      email: ""
    }
  }
  async componentWillLoad() {
    await this.initEntry()
  }

  private async login() {
    try {
      const response = await UserManagementApiFactory(undefined, this.apiBase).loginUser(this.entry);
      if (response.status < 299) {
        this.loggedIn.emit(response.data.id);
      }
    } catch (err: any) {
      if (err.response && err.response.status === 404) {
        this.loginFailed = true;
      }
    }
  }



  render() {
    return (
      <Host>
        <sl-card>
          <span class="avatar-icon"><md-icon slot="start">login</md-icon></span>
          <h2>Login</h2>
          <form ref={el => this.formElement = el}>
            <md-filled-text-field label="Email"
                                  type="email"
                                  required
                                  value={this.entry.email}
                                  oninput={(ev: InputEvent) => {
                                    if (this.entry) {
                                      this.entry.email = this.handleInputEvent(ev)
                                      this.loginFailed = false;
                                    }
                                  }}>
            </md-filled-text-field>
            <md-filled-button type="submit" disabled={!this.isValid}
                              onclick={() => this.login()}>
              Login
            </md-filled-button>
            {this.loginFailed ? <div class="error">Wrong email address</div> : null}
          </form>
        </sl-card>
      </Host>
    );
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
    return target.value
  }
}
