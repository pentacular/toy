export const el = (id) => document.getElementById(id);

export const onClick = (id, op) => el(id).addEventListener('click', op);

export const hide = (id) => {
  el(id).style.display = 'none';
};

export const show = (id) => {
  el(id).style.display = null;
};
