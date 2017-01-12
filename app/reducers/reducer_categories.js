export default function categories() {
  return [
    {
      id: 1,
      title: 'GEOPHYSICAL',
      parent_category: 'GEO',
      to: 'geo',
      child_categories: [
        {
          category: 'Earthquake',
          to: 'earthquake'
        },
        {
          category: 'Vlocano',
          to: 'vlocano'
        },
        {
          category: 'Mass Movement(DRY)',
          to: 'dry'
        }
      ]
    },
    {
      id: 2,
      title: 'HYDROLOGICAL',
      parent_category: 'HYDRO',
      to: 'hydro',
      child_categories: [
        {
          category: 'Flood',
          to: 'flood'
        },
        {
          category: 'Mass Movement(WET)',
          to: 'wet'
        }
      ]
    },
    {
      id: 3,
      title: 'CLIMATOLOGICAL',
      parent_category: 'GlIMATO',
      to: 'climato',
      child_categories: [
        {
          category: 'Extreme Temperature',
          to: 'extremtemperature'
        },
        {
          category: 'Drought',
          to: 'drought'
        },
        {
          category: 'Wild Fire',
          to: 'wildfire'
        }
      ]
    },
    {
      id: 4,
      title: 'BIOLOGICAL',
      parent_category: 'BIO',
      to: 'bio',
      child_categories: [
        {
          category: 'Epidemic',
          to: 'epidemic'
        },
        {
          category: 'Insect Infestation',
          to: 'insectinfestation'
        },
        {
          category: 'Animal Stampede',
          to: 'animalstampede'
        }
      ]
    },
    {
      id: 5,
      title: 'MAN-MADE',
      parent_category: 'MANMADE',
      to: 'manmade',
      child_categories: []
    },
    // {
    //   id: 6,
    //   title: 'SELF-HELP TECHNOLOGY',
    //   parent_category: 'SELF-HELP TECH',
    //   to: 'selfhelp',
    //   child_categories: [{
    //     category: 'appropriate Tech',
    //     to: 'appropriatetech'
    //   }]
    // }
  ];
}
