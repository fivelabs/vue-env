import Env from './env';

export { Env };

export default {

  install(Vue, options) {

    Vue.env = Env.init(

      options.env || {},

      options.current || '',

      options.default || 'default'

    );

    Object.defineProperties(Vue.prototype, {

      $env: {

        get() {

          return Vue.env;

        },

      },

    });

  },

};
