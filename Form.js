// Well Done: Great job creating a form component. The form component is well structured and easy to understand. The form component is also reusable and can be used in different parts of the application. The form component also has a clear separation of concerns, making it easy to maintain and update in the future. */
class Form extends Component {
  constructor() {
    super();
    this._element = null;

    this._onSubmit = this._onSubmit.bind(this);
  }

  setEventListener() {
    this._submit = this._element.querySelector(`.columns__submit`);
    // Could be improve: It would be more appropriate to use the submit event for a form submission rather than the click event on the submit button. This ensures that the form submission is handled correctly, even if the user submits the form by pressing the Enter key.
    this._submit.addEventListener(`click`, this._onSubmit);
  }

  get template() {
    return `<form>
                    <h1 class="column__title">
                        Enter the data
                    </h1>
                    <h2 class="column__heading">
                        Name
                    </h2>
                    <input type="text" name="name">
                    <h2 class="column__heading">
                        Do you have a cat?
                    </h2>
                    <label class="column__label">
                        <input type="radio" value="yes" name="cat">
                        <span>Yes</span>
                    </label>
                    <label class="column__label">
                        <input type="radio" value="no" name="cat">
                        <span>No</span>
                    </label>
                    <h2 class="column__heading">Have you had a rest recently?</h2>
                    <label class="column__label">
                        <input type="radio" value="yes" name="rest">
                        <span>Yes</span>
                    </label>
                    <label class="column__label">
                        <input type="radio" value="no" name="rest">
                        <span>No</span>
                    </label>
                    <h2 class="column__heading">Do you have enough money?</h2>
                    <label  class="column__label">
                        <input type="radio" value="yes" name="money">
                        <span>Yes</span>
                    </label>
                    <label class="column__label">
                        <input type="radio" value="no" name="money">
                        <span>No</span>
                    </label>
                    <button class="columns__submit">
                        HAPPINESS RATE
                    </button>
		    	</form>`.trim();
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }
  _onSubmit(evt) {
    evt.preventDefault();
    return typeof this._onSubmit === `function` && this._onSubmit(evt);
  }
  removeEventListener() {
    this._submit.removeEventListener(`click`, this._onSubmit);
  }
}
