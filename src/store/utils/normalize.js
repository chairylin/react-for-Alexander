export const normalize = (items, idFieldName = "id") => ({
  entities: items.reduce((acc, item) => {
    acc[item[idFieldName]] = item;
    return acc;
  }, {}),
  ids: items.map((item) => item[idFieldName]),
});
