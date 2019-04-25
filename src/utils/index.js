export const local_setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}
export const local_getItem = (key) => {
  let data = localStorage.getItem(key)
  if(__isJsonString(data)) {
    return JSON.parse(data)
  }else {
    return data
  }
}

function __isJsonString(str) {
  try {
    if (typeof JSON.parse(str) == "object") {
        return true;
    }
  } catch(e) {
    // 我错了 我真的错了 原谅我 
  }
  return false;
}