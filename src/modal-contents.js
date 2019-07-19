import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-input/paper-textarea.js';

class ModalContents extends PolymerElement {
  static get template() {
    return html`
    <style>
    .btn {
      cursor: pointer;
      height: 3vh;
      width: 10vw;
      text-align: center;
      background: whitesmoke;
      color: #24294a;
      font-size: 1em;
      border-radius: 15px;
      margin-top: 20px;
    }

    .btn:hover, .btn:focus {
      background:  rgb(218, 214, 214);
    }

    .btn:active {
      box-shadow: 0 1px 2px rgba(0,0,0, 0.5) inset;
    }

    </style>
      <paper-input label="User" value="{{user::input}}"></paper-input>
      <paper-input label="Task Name" value="{{title::input}}" value="{{user::input}}"></paper-input>
      <paper-input label="Due Date" value="{{date::input}}"></paper-input>
      <paper-textarea label="Task Description" value="{{description::input}}"></paper-textarea>
      <button class="btn" on-click="newTask">Submit</button>
    `;
  }

  static get properties() {
    return {
      user: String,
      title: String,
      date: String,
      description: String
    }
  }

  newTask() {
    const newTask = {
      assignedname__c: this.user,
      title__c: this.title,
      duedate__c: this.date,
      taskdescription__c: this.description,
      status__c: "In Progress",
      color__c: "blue"
    }
  
    const event = new CustomEvent('new task', { detail: newTask });
    this.dispatchEvent(event);
  
    this.user = "";
    this.title = "";
    this.date = "";
    this.description = "";
  }

  constructor() {
    super();
  }
}

customElements.define('modal-contents', ModalContents);