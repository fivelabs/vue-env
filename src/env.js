import _ from 'lodash';

export default {

  default: '',

  current: '',

  env: {},

  get(key, defaultValue) {
    return _.get(
      this.getCurrentEnv(),
      key,
      _.get(
        this.getDefaultEnv(),
        key,
        defaultValue || ''
      )
    );
  },

  put(key, value) {
    _.get(this.getDefaultEnv(), key, value);
    return this;
  },

  forget(key) {
    _.unset(this.getDefaultEnv(), key);
    return this;
  },

  getCurrentEnv() {
    return this.getEnv(this.current);
  },

  getDefaultEnv() {
    return this.getEnv(this.default);
  },

  getEnv(key) {
    return _.get(this.env, key);
  },

  init(env, current, defaultEnv) {
    this.env = env;
    this.current = current || '';
    this.default = defaultEnv || '';
    return this;
  }

};
