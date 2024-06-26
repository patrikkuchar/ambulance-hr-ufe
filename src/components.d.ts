/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface XkucharpAmbulanceApp {
        "apiBase": string;
        "basePath": string;
        "operationType": string;
    }
    interface XkucharpAmbulanceEmployeeCreate {
        "apiBase": string;
    }
    interface XkucharpAmbulanceEmployeeEdit {
        "apiBase": string;
        "employeeId": string;
        "operationType": string;
    }
    interface XkucharpAmbulanceEmployeesList {
        "apiBase": string;
    }
    interface XkucharpAmbulanceLogin {
        "apiBase": string;
    }
}
export interface XkucharpAmbulanceEmployeeCreateCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLXkucharpAmbulanceEmployeeCreateElement;
}
export interface XkucharpAmbulanceEmployeeEditCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLXkucharpAmbulanceEmployeeEditElement;
}
export interface XkucharpAmbulanceEmployeesListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLXkucharpAmbulanceEmployeesListElement;
}
export interface XkucharpAmbulanceLoginCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLXkucharpAmbulanceLoginElement;
}
declare global {
    interface HTMLXkucharpAmbulanceAppElement extends Components.XkucharpAmbulanceApp, HTMLStencilElement {
    }
    var HTMLXkucharpAmbulanceAppElement: {
        prototype: HTMLXkucharpAmbulanceAppElement;
        new (): HTMLXkucharpAmbulanceAppElement;
    };
    interface HTMLXkucharpAmbulanceEmployeeCreateElementEventMap {
        "create-clicked": string;
        "back-clicked": string;
    }
    interface HTMLXkucharpAmbulanceEmployeeCreateElement extends Components.XkucharpAmbulanceEmployeeCreate, HTMLStencilElement {
        addEventListener<K extends keyof HTMLXkucharpAmbulanceEmployeeCreateElementEventMap>(type: K, listener: (this: HTMLXkucharpAmbulanceEmployeeCreateElement, ev: XkucharpAmbulanceEmployeeCreateCustomEvent<HTMLXkucharpAmbulanceEmployeeCreateElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLXkucharpAmbulanceEmployeeCreateElementEventMap>(type: K, listener: (this: HTMLXkucharpAmbulanceEmployeeCreateElement, ev: XkucharpAmbulanceEmployeeCreateCustomEvent<HTMLXkucharpAmbulanceEmployeeCreateElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLXkucharpAmbulanceEmployeeCreateElement: {
        prototype: HTMLXkucharpAmbulanceEmployeeCreateElement;
        new (): HTMLXkucharpAmbulanceEmployeeCreateElement;
    };
    interface HTMLXkucharpAmbulanceEmployeeEditElementEventMap {
        "logout-clicked": string;
        "back-to-list-clicked": string;
    }
    interface HTMLXkucharpAmbulanceEmployeeEditElement extends Components.XkucharpAmbulanceEmployeeEdit, HTMLStencilElement {
        addEventListener<K extends keyof HTMLXkucharpAmbulanceEmployeeEditElementEventMap>(type: K, listener: (this: HTMLXkucharpAmbulanceEmployeeEditElement, ev: XkucharpAmbulanceEmployeeEditCustomEvent<HTMLXkucharpAmbulanceEmployeeEditElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLXkucharpAmbulanceEmployeeEditElementEventMap>(type: K, listener: (this: HTMLXkucharpAmbulanceEmployeeEditElement, ev: XkucharpAmbulanceEmployeeEditCustomEvent<HTMLXkucharpAmbulanceEmployeeEditElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLXkucharpAmbulanceEmployeeEditElement: {
        prototype: HTMLXkucharpAmbulanceEmployeeEditElement;
        new (): HTMLXkucharpAmbulanceEmployeeEditElement;
    };
    interface HTMLXkucharpAmbulanceEmployeesListElementEventMap {
        "edit-clicked": string;
        "add-clicked": string;
    }
    interface HTMLXkucharpAmbulanceEmployeesListElement extends Components.XkucharpAmbulanceEmployeesList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLXkucharpAmbulanceEmployeesListElementEventMap>(type: K, listener: (this: HTMLXkucharpAmbulanceEmployeesListElement, ev: XkucharpAmbulanceEmployeesListCustomEvent<HTMLXkucharpAmbulanceEmployeesListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLXkucharpAmbulanceEmployeesListElementEventMap>(type: K, listener: (this: HTMLXkucharpAmbulanceEmployeesListElement, ev: XkucharpAmbulanceEmployeesListCustomEvent<HTMLXkucharpAmbulanceEmployeesListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLXkucharpAmbulanceEmployeesListElement: {
        prototype: HTMLXkucharpAmbulanceEmployeesListElement;
        new (): HTMLXkucharpAmbulanceEmployeesListElement;
    };
    interface HTMLXkucharpAmbulanceLoginElementEventMap {
        "logged-in": string;
    }
    interface HTMLXkucharpAmbulanceLoginElement extends Components.XkucharpAmbulanceLogin, HTMLStencilElement {
        addEventListener<K extends keyof HTMLXkucharpAmbulanceLoginElementEventMap>(type: K, listener: (this: HTMLXkucharpAmbulanceLoginElement, ev: XkucharpAmbulanceLoginCustomEvent<HTMLXkucharpAmbulanceLoginElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLXkucharpAmbulanceLoginElementEventMap>(type: K, listener: (this: HTMLXkucharpAmbulanceLoginElement, ev: XkucharpAmbulanceLoginCustomEvent<HTMLXkucharpAmbulanceLoginElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLXkucharpAmbulanceLoginElement: {
        prototype: HTMLXkucharpAmbulanceLoginElement;
        new (): HTMLXkucharpAmbulanceLoginElement;
    };
    interface HTMLElementTagNameMap {
        "xkucharp-ambulance-app": HTMLXkucharpAmbulanceAppElement;
        "xkucharp-ambulance-employee-create": HTMLXkucharpAmbulanceEmployeeCreateElement;
        "xkucharp-ambulance-employee-edit": HTMLXkucharpAmbulanceEmployeeEditElement;
        "xkucharp-ambulance-employees-list": HTMLXkucharpAmbulanceEmployeesListElement;
        "xkucharp-ambulance-login": HTMLXkucharpAmbulanceLoginElement;
    }
}
declare namespace LocalJSX {
    interface XkucharpAmbulanceApp {
        "apiBase"?: string;
        "basePath"?: string;
        "operationType"?: string;
    }
    interface XkucharpAmbulanceEmployeeCreate {
        "apiBase"?: string;
        "onBack-clicked"?: (event: XkucharpAmbulanceEmployeeCreateCustomEvent<string>) => void;
        "onCreate-clicked"?: (event: XkucharpAmbulanceEmployeeCreateCustomEvent<string>) => void;
    }
    interface XkucharpAmbulanceEmployeeEdit {
        "apiBase"?: string;
        "employeeId"?: string;
        "onBack-to-list-clicked"?: (event: XkucharpAmbulanceEmployeeEditCustomEvent<string>) => void;
        "onLogout-clicked"?: (event: XkucharpAmbulanceEmployeeEditCustomEvent<string>) => void;
        "operationType"?: string;
    }
    interface XkucharpAmbulanceEmployeesList {
        "apiBase"?: string;
        "onAdd-clicked"?: (event: XkucharpAmbulanceEmployeesListCustomEvent<string>) => void;
        "onEdit-clicked"?: (event: XkucharpAmbulanceEmployeesListCustomEvent<string>) => void;
    }
    interface XkucharpAmbulanceLogin {
        "apiBase"?: string;
        "onLogged-in"?: (event: XkucharpAmbulanceLoginCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "xkucharp-ambulance-app": XkucharpAmbulanceApp;
        "xkucharp-ambulance-employee-create": XkucharpAmbulanceEmployeeCreate;
        "xkucharp-ambulance-employee-edit": XkucharpAmbulanceEmployeeEdit;
        "xkucharp-ambulance-employees-list": XkucharpAmbulanceEmployeesList;
        "xkucharp-ambulance-login": XkucharpAmbulanceLogin;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "xkucharp-ambulance-app": LocalJSX.XkucharpAmbulanceApp & JSXBase.HTMLAttributes<HTMLXkucharpAmbulanceAppElement>;
            "xkucharp-ambulance-employee-create": LocalJSX.XkucharpAmbulanceEmployeeCreate & JSXBase.HTMLAttributes<HTMLXkucharpAmbulanceEmployeeCreateElement>;
            "xkucharp-ambulance-employee-edit": LocalJSX.XkucharpAmbulanceEmployeeEdit & JSXBase.HTMLAttributes<HTMLXkucharpAmbulanceEmployeeEditElement>;
            "xkucharp-ambulance-employees-list": LocalJSX.XkucharpAmbulanceEmployeesList & JSXBase.HTMLAttributes<HTMLXkucharpAmbulanceEmployeesListElement>;
            "xkucharp-ambulance-login": LocalJSX.XkucharpAmbulanceLogin & JSXBase.HTMLAttributes<HTMLXkucharpAmbulanceLoginElement>;
        }
    }
}
