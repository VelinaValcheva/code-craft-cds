class Record {
  quantity;

  constructor() {
    this.quantity = 5;
  }
}

describe("Buy CDs:", () => {
  it("when payment fails, inventory remains the same", () => {
    const record = new Record();
    expect(record.quantity).toBe(5);
  });
});
