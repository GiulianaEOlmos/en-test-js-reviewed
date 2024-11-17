class Search extends Component {
  constructor() {
    super();
    this._onChange = null;
  }

  get template() {
    // Well done: Using a `template` getter to define the component's HTML structure keeps the class modular and reusable. This makes it easy to create multiple instances of the class with different content.
    return `<input type="text" name="search" placeholder="Search">
      <button type="submit" class="visually-hidden">Search</button>`.trim();
  }

  removeEventListener() {
    // Needs correcting: The event listener is removed, but the `keydown` event mentioned here does not match the `keyup` event used in `setEventListener`. Ensure event types are consistent.
    this._element.removeEventListener(`keydown`, this._onSearchChange);
  }

  _onSearchChange(event) {
    // Well done: Checking if `_onChange` is a function before calling it prevents runtime errors. This is a good practice to ensure that the function is defined before calling it.
    if (typeof this._onChange === `function`) {
      this._onChange(event.target.value);
    }
  }
  set onChange(fn) {
    this._onChange = fn;
  }

  setEventListener() {
    // Needs correcting: The `keyup` event should match the event being removed in `removeEventListener` to prevent inconsistencies.
    // Needs correcting: The `this._onSearchChange` function is referenced without being bound to the class instance, which could lead to issues with the `this` context. Consider binding it in the constructor. Read more about binding functions in JavaScript here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
    this._element.addEventListener(`keyup`, this._onSearchChange);
  }
}
