const init = {
  user: {},
  arts: [],
  name: "shridhar",
};

export const dummyreducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case "name":
      return { ...state, name: payload };
    default:
      return state;
  }
};
