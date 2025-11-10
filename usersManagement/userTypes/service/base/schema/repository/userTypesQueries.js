const listUserTypes = (locale) => [
  {
    $project: {
      _id: 0,
      code: 1,
      name: {
        $getField: {
          input: "$userTypesNames",
          field: locale
        }
      }
    }
  }
];

module.exports = { listUserTypes };
