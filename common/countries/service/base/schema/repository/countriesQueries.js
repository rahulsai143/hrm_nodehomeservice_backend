const listCountries = (country) => [
  {
    $project: {
      _id: 0,
      code: 1,
      name: {
        $getField: {
          input: "$countryNames",
          field: country
        }
      }
    }
  }
];

module.exports = { listCountries };
