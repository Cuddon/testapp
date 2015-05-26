
/**
 * Created by Andrew on 26/05/2015.
 */


// Post detail
Router.route('/project/:_id', {
  name: 'project',
  template: 'project',
/*
  data: function() {
    return Projects.findOne(this.params._id);
  }
*/
});
