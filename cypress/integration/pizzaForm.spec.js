describe("Form inputs", () => {
  it("can navigate to the site", () => {
    cy.visit("http://localhost:3003");
    cy.url().should("include", "localhost");
  });

  it("can navigate to the order form", () => {
    cy.visit("http://localhost:3003/order");
    cy.url().should("include", "localhost");
  });

  it("order button is disabled", () => {
    cy.get("button.submit").should("be.disabled");
  });

  it("can enter a name", () => {
    cy.get('input[name="name"]')
      .type("Matthew Molloy")
      .should("have.value", "Matthew Molloy");
  });

  it("can select a size", () => {
    cy.get('select[name="size"]')
      .select("Medium")
      .should("have.value", "Medium");
  });

  it("can select a sauce", () => {
    cy.get('[type="radio"]').first().check();
  });

  it("can select a topping", () => {
    cy.get('[type="checkbox"]').first().check();
  });

  it("can enter a special instruction", () => {
    cy.get('input[name="instructions"]')
      .type("Boneless Pizza Please")
      .should("have.value", "Boneless Pizza Please");
  });

  it("order button not disabled any more", () => {
    cy.get("button.submit").should("not.be.disabled");
  });
});
