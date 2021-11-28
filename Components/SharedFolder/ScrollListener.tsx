export class ScrollListener {
  change_parent_variable;
  activate;
  position = false;
  hidden = false;
  recorder = 150;
  constructor(change: Function, activate?: Function) {
    this.change_parent_variable = change;
    this.activate = activate;
    ScrollListener.clear(this);
  }
  ScrollIng = () => {
    if (this.change_parent_variable === undefined) return;
    window.addEventListener("scroll", this.foo, true);
  };
  foo = (event: any) => {
    let currentState = window.scrollY;

    if (currentState > this.recorder && !this.hidden) {
      this.change_parent_variable(true);

      this.hidden = true;
    } else if (currentState < this.recorder && this.hidden) {
      this.hidden = false;
      this.change_parent_variable(false);
    }
    if (Math.abs(this.recorder - currentState) > 150) this.recorder = window.scrollY;
  };

  ActivateOn100 = () => {
    if (this.activate === undefined) {
      return;
    }
    window.addEventListener("scroll", this.foo2, true);
  };
  foo2 = () => {
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
  };
  static c: ScrollListener[] = [];
  static clear(klasa: ScrollListener) {
    ScrollListener.c.forEach((v) => {
      window.removeEventListener("scroll", v.foo, true);
      window.removeEventListener("scroll", v.foo2, true);
    });
    ScrollListener.c.push(klasa);
  }
}
