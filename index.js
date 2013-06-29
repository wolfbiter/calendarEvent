var resource = require('resource');
var calendarEvent = resource.define('calendarEvent');

calendarEvent.schema.description = 'for creating calendar events';

//
// calendarEvent property definitions
//
calendarEvent.property('description', {
  "description": "a description of the calendar event",
  "type": "string"
});

// TODO move this into a 'privacy' resource
calendarEvent.property('public', {
  "description": "privacy setting of the calendar event",
  "type": "boolean",
  "required": true
});

calendarEvent.property('start', {
  "description": "start time of the calendar event",
  "type": "string",
  "required": true
});

calendarEvent.property('end', {
  "description": "end time of the calendar event",
  "type": "string",
  "required": true
});

// calendarEvent persistence model
calendarEvent.persist('memory');

calendarEvent.dependencies = {
};

exports.calendarEvent = calendarEvent;
