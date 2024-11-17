window.onload = () => {
  const FORM_WRAPPER = document.querySelector(`.column_type_input`);
  const ratingArray = [];
  // Needs correcting: If the value of the variable is not going to change, it should be declared as a constant. This makes the code easier to read and understand. */
  let countedRating = 20;

  const renderSearch = (allItemsData) => {
    PageEnum.SiteWrapper.SEARCH.innerHTML = ``;

    const searchComponent = new Search();

    PageEnum.SiteWrapper.SEARCH.appendChild(searchComponent.render());

    searchComponent.onChange = (value) => {
      // Well done: Filtering items based on the input value dynamically updates the results.
      const filteredItems = allItemsData.filter((currentItem) =>
        currentItem._names.includes(value)
      );
      //Can be improved: Ensure consistency in naming. The property `PageEnum.SiteWrapper.rating` should use uppercase like other enum values for uniformity.
      PageEnum.SiteWrapper.rating.innerHTML = ``;
      // Well done: Providing a default state for when the input value is empty improves the user experience.
      value === ``
        ? ratingRender(countedRating, allItemsData)
        : ratingUpdate(filteredItems);
    };
  };

  const ratingRender = (ratingAmount, ratingArray) => {
    for (let i = 0; i < ratingAmount; i++) {
      ratingArray[i] = new PersonRating(returnRandomData());
    }
    ratingUpdate(ratingArray);
  };

  const ratingUpdate = (ratingArray) => {
    ratingArray.forEach((item) => {
      PageEnum.SiteWrapper.rating.appendChild(item.render());
    });

    if (ratingArray.length === 0) {
      // Well done: Providing user feedback when the rating list is empty improves the user experience.
      PageEnum.SiteWrapper.rating.innerHTML = `Rating list is empty`;
    }
  };

  const renderForm = () => {
    // Well done: Instantiating the form component and appending its rendered output to the DOM enhances modularity and separation of concerns.
    const formComponent = new Form();
    FORM_WRAPPER.appendChild(formComponent.render());

    formComponent.onSubmit = (evt) => {
      evt.preventDefault();
      // Needs correcting: To get the input from the radio buttons, you should use the checked property to determine which radio button is selected. This will ensure that the correct value is used in the form submission. You can read more about how check the value of radio buttons in this link: https://developer.mozilla.org/en-US/docs/Web/CSS/:checked
      const name = document.querySelector(`input[name=name]`).value;
      const cat = document.querySelector(`input[name=cat]`).value;
      const rest = document.querySelector(`input[name=rest]`).value;
      const money = document.querySelector(`input[name=money]`).value;

      // Needs correctiong: If we are not sure that the users of the app will only be men, it would be better to use a more generic name for the class, such as Person or User, to make it more inclusive. This will make the code more flexible and easier to maintain in the future.
      const Man = new Person(name);
      if (cat === "yes") {
        Man.hasCat();
      }
      if (rest === "yes") {
        Man.hasRest();
      }
      if (money === "yes") {
        Man.hasMoney();
      }
      Man.isSunny().then((happiness) => {
        Man._valueElement.innerHTML = name;
        //Needs correcting: This code let us know that if someone is more happy than 4 then will show a sad face. Then a better approach should use <= or >= to compare the values. You can read more about comparison operators in this link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
        if (happiness === 4) {
          Man._iconElement.innerHTML = "😆";
        } else if (happiness === 3 || happiness === 2) {
          Man._iconElement.innerHTML = "😐";
        } else {
          Man._iconElement.innerHTML = "☹️";
        }

        //Needs correcting: The PersonRating component should be updated with the new person's data. This ensures that the new person is displayed in the rating list. This is the link where explain how to add an element to an array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
      });
      //Needs Correcting: Use catch block to handle errors that may occur during the fetch request. This ensures that the application does not break if an error occurs.
    };
  };

  renderForm();
  renderSearch(ratingArray);
  ratingRender(countedRating, ratingArray);
};
