describe("Buy CDs", () => {
  it("when payment fails, inventory remains the same", () => {
    expect(cd.getQuantity()).toBe(5);
  });
});
