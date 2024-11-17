class Component {
  constructor() {
    // Well done: Adding a check to prevent instantiating the abstract class directly is a great way to enforce correct usage of the class.
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }
  }

  // Needs correcting: The content of this change should change. In object-oriented programming, getters are used to access the properties of an object. A getter should ideally return a value rather than throwing an error. Throwing an error in a getter is unconventional and might confuse future developers.
  get template() {
    throw new Error(`You have to define template.`);
  }

  static createElement(template) {
    // Needs correcting: Variable name should be a noun, which describes the value assigned to it */
    const createNewTag = document.createElement(`div`);
    createNewTag.innerHTML = template;
    return createNewTag.firstChild;
  }

  render() {
    this._element = Component.createElement(this.template);
    this.setEventListener();
    return this._element;
  }

  removeItem() {
    this.removeEventListener();
    this._element.remove();
    this._element = null;
  }

  setEventListener() {}
  removeEventListener() {}
}
