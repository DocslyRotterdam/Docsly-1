export class ScrollListener {
  change_parent_variable;
  hidden = false;
  constructor(change: Function) {
    this.change_parent_variable = change;
  }
  ScrollIng = () => {
    let recorder = 150;
    window.addEventListener("scroll", () => {
      let currentState = window.scrollY;

      if (currentState > recorder && !this.hidden) {
        this.change_parent_variable(true);

        this.hidden = true;
      }
      if (currentState < recorder && this.hidden) {
        this.hidden = false;
        this.change_parent_variable(false);
      }
      if (Math.abs(recorder - currentState) > 150) recorder = window.scrollY;
    });
  };
}
