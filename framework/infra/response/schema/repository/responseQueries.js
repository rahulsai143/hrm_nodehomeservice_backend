const responseCodesfindByCode = (code,locale) => [
  {
    $match: {
      code: code
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      message: {
        $getField: { input: "$localeMessages", field: locale }
      },
      status: {
        $getField: { input: "$localeStatuses", field: locale }
      }      
    }
  }
];


module.exports = {responseCodesfindByCode};