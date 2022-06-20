'use strict';

module.exports = {
  register ({ strapi }) {
    strapi.service('plugin::users-permissions.user').fetchAuthenticatedUser = (id) => {
      return strapi
        .query('plugin::users-permissions.user')
        .findOne({ where: { id }, populate: ['bookmarks'] })
    }
  },
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
