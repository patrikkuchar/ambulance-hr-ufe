import {Component, Host, h, Prop, State} from '@stencil/core';

@Component({
  tag: 'xkucharp-ambulance-app',
  styleUrl: 'xkucharp-ambulance-app.css',
  shadow: true,
})
export class XkucharpAmbulanceApp {
  @State() private relativePath = "";

  @Prop() basePath: string="";
  @Prop() apiBase: string;
  @Prop() operationType: string;

  componentWillLoad() {
    const baseUri = new URL(this.basePath, document.baseURI || "/").pathname;

    const toRelative = (path: string) => {
      if (path.startsWith( baseUri)) {
        this.relativePath = path.slice(baseUri.length)
      } else {
        this.relativePath = ""
      }
    }

    window.navigation?.addEventListener("navigate", (ev: Event) => {
      if ((ev as any).canIntercept) { (ev as any).intercept(); }
      let path = new URL((ev as any).destination.url).pathname;
      toRelative(path);
    });

    toRelative(location.pathname)
  }


  render() {
    const navigate = (path: string) => {
      const absolute = new URL(path, new URL(this.basePath, document.baseURI)).pathname;
      console.log("absolute: ", absolute)
      console.log("path: ", path)
      console.log("basepath: ", this.basePath)
      console.log("document.baseURI: ", document.baseURI)
      window.navigation.navigate(absolute)
    }

    console.log("relativePath: ", this.relativePath);
    console.log("apiBase: ", this.apiBase)
    let element = this.operationType === "HR" ? "list" : "login";
    let editId = '';

    console.log("operationType: ", this.operationType);

    if (this.relativePath.startsWith("edit/")) {
      element = "edit";
      editId = this.relativePath.split("/")[1]
    }

    if (this.relativePath.startsWith("list")) {
      //if (this.operationType === "Employee") {
      //  navigate("/login")
      //  return
      //}
      element = "list";
    }

    if (this.relativePath.startsWith("login")) {
      //if (this.operationType === "HR") {
      //  navigate("/list")
      //  return
      //}
      element = "login";
    }

    if (this.relativePath.startsWith("create")) {
      element = "create";
    }

    const getComponent = () => {
      switch (element) {
        case "list":
          return <xkucharp-ambulance-employees-list apiBase={this.apiBase}
                                                    onEdit-clicked={(ev: CustomEvent<string>) => navigate('/edit/' + ev.detail)}
                                                    onAdd-clicked={() => navigate('/create')}></xkucharp-ambulance-employees-list>
        case "login":
          return <xkucharp-ambulance-login apiBase={this.apiBase}
                                           onLogged-in={(ev: CustomEvent<string>) => navigate('/edit/' + ev.detail)}></xkucharp-ambulance-login>
        case "create":
          return <xkucharp-ambulance-employee-create apiBase={this.apiBase}
                                            onCreate-clicked={() => navigate('/list')}></xkucharp-ambulance-employee-create>
        case "edit":
          return <xkucharp-ambulance-employee-edit apiBase={this.apiBase}
                                                   employeeId={editId}
                                                   operationType={this.operationType}
                                                   onLogout-clicked={() => navigate('/login')}
                                                   onBack-to-list-clicked={() => navigate('/list')}></xkucharp-ambulance-employee-edit>
        default:
          return <div>Unknown element: {element}</div>
      }
    }

    const handleOperationTypeChange = () => {
      this.operationType = this.operationType === "HR" ? "Employee" : "HR";
      if (this.operationType === "HR") {
        navigate("/list")
      } else {
        navigate("/login")
      }
    }

    return (
      <Host>
        <md-list-item id="my-navbar">
          <div slot="start"><strong>Ambulance HR</strong> - Patrik Kuchár</div>
          <md-filled-button slot="end" onClick={() => handleOperationTypeChange()}>
            {this.operationType === "HR" ? "Change to employee view" : "Change to HR view"}
          </md-filled-button>
        </md-list-item>

        {getComponent()}


      </Host>
    );
  }
}
