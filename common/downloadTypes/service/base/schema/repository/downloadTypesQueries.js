const listDownloadTypes = (locale) => [
  {
    $project: {
      _id: 0,
      code: 1,
      name: {
        $getField: {
          input: "$downloadTypesNames",
          field: locale
        }
      }
    }
  }
];

module.exports = { listDownloadTypes };
