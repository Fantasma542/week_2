"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var contacts_1 = require("./contacts");
var pepe = new person_1.Person("Juan", 20, "Gran Via");
var array = new contacts_1.Contacts();
array.people.push(pepe);
array.printCalendar();
