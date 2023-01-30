export default class Difference {
  constructor(oldOfficer, newOfficer, items) {
    try {
      this.oldOfficer = document.querySelector(oldOfficer);
      this.newOfficer = document.querySelector(newOfficer);
      this.oldItems = this.oldOfficer.querySelectorAll(items);
      this.newItems = this.newOfficer.querySelectorAll(items);
      this.items = items;
      this.oldCounter = 0;
      this.newCounter = 0;
    } catch (e) {}
  }

  bindTriggers(officer, counter, officerItems) {
    officer.querySelector(".plus").addEventListener("click", () => {
      if (counter !== officerItems.length - 2) {
        officerItems[counter].style.cssText = `
					opacity: 1;
					visibility: visible;
					position: static;
				`;
        officerItems[counter].classList.add("fadeInDown");
        counter++;
      } else {
        officerItems[counter].style.cssText = `
					opacity: 1;
					visibility: visible;
					position: static;
				`;
        officerItems[counter].classList.add("fadeInDown");
        officerItems[officerItems.length - 1].remove();
      }
    });
  }

  hideItems(officerItems) {
    officerItems.forEach((item, index, arr) => {
      if (index !== arr.length - 1) {
        item.style.cssText = `
					opacity: 0;
					visibility: hidden;
					position: absolute;
				`;
        item.classList.add("animated");
      }
    });
  }

  init() {
    try {
      this.hideItems(this.oldItems);
      this.hideItems(this.newItems);
      this.bindTriggers(this.oldOfficer, this.oldCounter, this.oldItems);
      this.bindTriggers(this.newOfficer, this.newCounter, this.newItems);
    } catch (e) {}
  }
}
