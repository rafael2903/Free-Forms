import Hashids from 'hashids';

export const encode = (id) => {
  const hashids = new Hashids('projetomp', 20);
  return hashids.encode(id);
};

export const decode = (hash) => {
  const hashids = new Hashids('projetomp', 20);
  return hashids.decode(hash);
};
