export function findForm(child) {
  let currentElement = child.$parent;

  while (currentElement) {
    if (currentElement.form) {
      return currentElement.form;
    }

    currentElement = currentElement.$parent;
  }

  return {};
}