const DataBuffer = {};

const DataStore = {

  set: (name, value) => {

    if (typeof value === 'object') DataBuffer[name] = { ...value };
    if (Array.isArray(value)) DataBuffer[name] = [...value];
    else DataBuffer[name] = value;

  },

  get: (name) => {

    const value = DataBuffer[name];

    if (!value) return null;
    if (typeof value === 'object') return { ...value };
    if (Array.isArray(value)) return [...value];

    return value;

  },

};

export default DataStore;
