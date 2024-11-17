//Well Done: Great use of classes to extend components and create a form. This is a good way to structure the code and make it more modular and reusable. :D
class PersonRating extends Component {
  constructor(data) {
    super(data);
    this._names = data.names;
    this._ratings = data.ratings;
  }
  get template() {
    return `
      <article class="columns__rating-item">
        <h3 class="columns__rating-title">${this._names}</h3>
        <span class="columns__rating-count">${this._ratings}</span>
      </article>`.trim();
  }
}
