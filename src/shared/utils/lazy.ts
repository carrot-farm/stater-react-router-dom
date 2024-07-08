export const lazy = (ms = 1000, data = null) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));
