const listEventGroups = (locale) => [
  {
    $project: {
      _id: 0,
      code: 1,
      name: {
        $getField: {
          input: "$eventGroupsNames",
          field: locale
        }
      }
    }
  },
];

const listEvents = (eventGroupCode, locale) => [
  { $match: { code: eventGroupCode } },
  {
    $project: {
      _id: 0,
      events: {
        $map: {
          input: "$events",
          as: "event",
          in: {
            code: "$$event.code",
            eventName: {
              $getField: {
                input: "$$event.localeNames",
                field: locale
              }
            }
          }
        }
      }
    }
  },
  { $unwind: "$events" },
  { $replaceRoot: { newRoot: "$events" } }
];

const listMessageTemplates = (eventGroupCode, eventCode) => [
  { $match: { code: eventGroupCode } },
  { $unwind: '$events' },
  { $match: { 'events.code': eventCode } },
  {
    $project: {
      _id: 0,
      messageTemplates: {
        $map: {
          input: '$events.messageTemplates',
          as: 'messageTemplate',
          in: {
            name: '$$messageTemplate.name',
            description: '$$messageTemplate.description'
          }
        }
      }
    }
  },
  { $unwind: '$messageTemplates' },
  { $replaceRoot: { newRoot: '$messageTemplates' } }
];
const readMessageTemplate = (eventGroupCode, eventCode, messageTemplateName) => [
  { $match: { code: eventGroupCode } },
  { $unwind: '$events' },
  { $match: { 'events.code': eventCode } },
  { $unwind: '$events.messageTemplates' },
  { $match: { 'events.messageTemplates.name': messageTemplateName } },
  {
    $replaceRoot: {
      newRoot: '$events.messageTemplates'
    }
  }
];




module.exports = { listEventGroups, listEvents, listMessageTemplates,readMessageTemplate};