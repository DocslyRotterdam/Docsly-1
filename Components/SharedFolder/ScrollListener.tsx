export class ScrollListener {
  change_parent_variable;
  activate;
  position = false;
  hidden = false;
  constructor(change: Function, activate?: Function) {
    this.change_parent_variable = change;
    this.activate = activate;
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
  ActivateOn100 = () => {
    if (this.activate === undefined) return;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        if (this.position === false && this.activate !== undefined) {
          this.activate(true);
          this.position = true;
        }
      } else {
        if (this.position === true && this.activate !== undefined) {
          this.activate(false);
          this.position = false;
        }
      }
    });
  };
}
