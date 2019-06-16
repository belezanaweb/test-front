import PropTypes from 'prop-types';

const Buffer = {};

const DataStore = {

  shared: (name) => {

    /**
     * get the object "name"
     * create one if does not exist
     */

    if (!Buffer[name]) Buffer[name] = {};
    return Buffer[name];

  },

  sharedArray: (name) => {

    /**
     * get the array "name"
     * create one if does not exist
     */

    if (!Buffer[name]) Buffer[name] = [];
    return Buffer[name];

  },

  readOnly: (name) => {

    /**
     * get a copy of the object/array "name"
     * return null if does not exist
     */

    const value = Buffer[name];

    if (!value) return null;
    if (typeof value === 'object') return { ...value };
    if (Array.isArray(value)) return [...value];

    return value;

  },

  store: (name, value) => {

    if (typeof value === 'object') {

      if (!Buffer[name]) Buffer[name] = {};
      else Object.keys(Buffer[name]).forEach((key) => {

        delete Buffer[name][key];

      });

      Object.keys(value).forEach((key) => {

        Buffer[name][key] = value[key];

      });

    } else if (Array.isArray(value)) {

      if (!Buffer[name]) Buffer[name] = [];
      else Buffer[name].length = 0;
      value.forEach(val => Buffer[name].push(val));

    } else return null; // just Objects and Arrays!

    return Buffer[name];

  },

};

DataStore.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DataStore;
