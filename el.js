export const onClick = (id, op) => document.getElementById(id).addEventListener('click', op);

export const hide = (id) => {
  document.getElementById(id).style.display = 'none';
};

export const show = (id) => {
  document.getElementById(id).style.display = null;
};
