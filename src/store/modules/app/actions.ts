const init = () => {
  return async () => {
    console.log("init");
  };
};

const destroy = () => {
  return async () => {
    console.log("destroy");
  };
};

export const extendActions = {
  init,
  destroy,
};
