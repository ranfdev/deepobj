export default (action, obj, keys, id, key) => {
  keys = keys.split(".");
  id = keys.splice(-1, 1);
  for (key in keys) obj = obj[keys[key]] = obj[keys[key]] || {};
  return action(obj, id);
}
