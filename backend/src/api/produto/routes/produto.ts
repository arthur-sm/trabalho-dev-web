export default {
  routes: [
    {
      method: 'GET',
      path: '/produtos',
      handler: 'produto.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/produtos/:id',
      handler: 'produto.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/produtos',
      handler: 'produto.create',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/produtos/:id',
      handler: 'produto.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/produtos/:id',
      handler: 'produto.delete',
      config: {
        policies: [],
      },
    },
  ],
};
