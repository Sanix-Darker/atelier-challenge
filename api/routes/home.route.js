// just the open route

/**
 *
 * @param {*} router
 */
const homeRoutes = (router) => {
  const prefix = `${process.env.API_BASE}/`;

    // The route to get cats
  router.get(`${prefix}`, (req, res) => {
    res.json({
      status: 'success',
      message: 'Welcome to CatMash API',
    });
  });
};

export default homeRoutes;
