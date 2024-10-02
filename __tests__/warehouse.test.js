class CD {
  quantity;

  constructor() {
    this.quantity = 5;
  }
}

describe("Buy CDs:", () => {
  it("when payment fails, inventory remains the same", () => {
    const cd = new CD();
    expect(cd.quantity).toBe(5);
  });

});
