FlowRouter.route('/test', {
  name: 'test',
  action: (params, queryParams) => {
    BlazeLayout.render(
      'MasterLayout', {
        top: 'Nav',
        main: 'Test',
      }
    );
  },
});
