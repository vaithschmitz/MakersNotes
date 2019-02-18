class ListView {
  constructor(list) {
    this.list = list;
  }

  display() {
    let notes = this.list.getNotes().map(x => x.text);
    let bullets = notes.map(x => `<li><div>${x}</div></li>`);
    let displayList = bullets.join("");
    return `<ul>${displayList}<ul>`;
  }
}
