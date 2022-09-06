const ACTIVE = 'subscription-tabs__button--active';
const TABACTIVE = 'tab--active';
const TICKET = ['js-month', 'js-half-year', 'js-year'];

const tabButtons = document.querySelectorAll('.subscription-tabs__button');
const tabs = document.querySelectorAll('.tab');

const showTab = (button) => {
  TICKET.forEach((el) => {
    if (button.classList.contains(el)) {
      tabs.forEach((tab)=> {
        if (tab.classList.contains(el)) {
          tab.classList.add(`${TABACTIVE}`);
        }
      });
    }
  });

};

tabButtons.forEach((button)=> {

  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    const tabButton = evt.target;
    if (evt.target.classList.contains(`${ACTIVE}`)) {
      return;
    }
    tabs.forEach((el) => {
      if (el.classList.contains(`${TABACTIVE}`)) {
        el.classList.remove(`${TABACTIVE}`);
      }
    });
    tabButtons.forEach((el) => {
      if (el.classList.contains(`${ACTIVE}`)) {
        el.classList.remove(`${ACTIVE}`);

      }
    });
    tabButton.classList.add(`${ACTIVE}`);

    showTab(evt.target);


  });
});
