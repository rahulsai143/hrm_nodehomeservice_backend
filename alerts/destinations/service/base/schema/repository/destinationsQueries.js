listDestinations = (locale) => [
  {
    $project: {
      _id: 0,
      code: 1,
      name: {
        $getField: { field: `localeNames.${locale}` }
      }      
    }
  }
];

module.exports = {listDestinations};