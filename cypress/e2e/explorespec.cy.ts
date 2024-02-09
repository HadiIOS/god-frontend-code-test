import carsjson from "../mocks/cars.json";
import { Car, Cars } from "../mocks/models/car";

describe("template spec", () => {

  beforeEach(() => cy.visit('/'))
  it("checks exists", () => {
    let cars = carsjson as Cars;
    let car = cars.at(0)!;



    const nameLabel = cy.get(`[data-cy='carname-${car?.id}']`);
    const image = cy.get(`[data-cy='image-${car?.id}']`);
    const shopButton = cy.get(`[data-cy='shop-${car?.id}']`);
    const learnButton = cy.get(`[data-cy='learn-${car?.id}']`);
    const slider = cy.get("[data-cy='slider']");
    const suvfilter = cy.get("[data-cy='navitem-suv'");
    const slide_next = cy.get(`[aria-label="Scroll Next"]`);

    //check existence of first cards
    slider.should("exist");
    nameLabel.should("exist");
    image.should("exist");
    shopButton.should("exist");
    learnButton.should("exist");
    suvfilter.should("exist");
    slide_next.should("exist");
  });

  it("check slider children have been populated", () => {
    let cars = carsjson as Cars;

    const slider = cy.get("[data-cy='slider']");
    slider.get("[role='listitem']").should("have.length", cars.length);
  });

  it("check suv filter select", () => {
    let cars = carsjson as Cars;

    const slider = cy.get("[data-cy='slider']");

    const suvfilter = cy.get("[data-cy='navitem-suv'");
    suvfilter.click();
    slider
      .find("[role='listitem']")
      .should(
        "have.length",
        cars.filter((c) => c.bodyType.match("suv")).length
      );
  });

  it("check estate filter select", () => {
    let cars = carsjson as Cars;

    const slider = cy.get("[data-cy='slider']");

    const suvfilter = cy.get("[data-cy='navitem-estate'");
    suvfilter.click();
    slider
      .find("[role='listitem']")
      .should(
        "have.length",
        cars.filter((c) => c.bodyType.match("estate")).length
      );
  });

  it("check end scroll disables next button", () => {
    let cars = carsjson as Cars;

    //slide till the end, cars length since it will be maximum clicks
    for (let i = 0; i < cars.length; i++) {
      cy.get(`[aria-label="Scroll Next"]`).realClick();
      cy.wait(1000);
    }

    cy.get(`[aria-label="Scroll Next"]`).should("be.disabled");
  });

  it("check learn page nav", () => {
    let cars = carsjson as Cars;
    let car = cars.at(1);

    const learnButton = cy.get(`[data-cy='learn-${car?.id}']`);
    learnButton.should("exist");
    learnButton.click({ force: true });
    cy.wait(300);
    cy.url().should("include", "/learn");
    cy.url().should("include", car?.id);
  });

  it("check shop page nav", () => {
    let cars = carsjson as Cars;
    //get a random car from list.
    let x = Math.random() * cars.length;
    let car = cars.at(2);

    const shopButton = cy.get(`[data-cy='shop-${car?.id}']`);
    shopButton.should("exist");
    shopButton.realClick();

    cy.url().should("include", "/shop");
    cy.url().should("include", car?.id);
  });

  it("check shop page text", () => {
    let cars = carsjson as Cars;
    let car = cars.at(1);

    cy.visit(`/shop/${car?.id}`);
    const titleLabel = cy.get("[data-cy='title']");
    const subLabel = cy.get("[data-cy='subtitle']");

    titleLabel.should("exist");
    subLabel.should("exist");

  });

  it("check learn page text", () => {
    let cars = carsjson as Cars;
    let car = cars.at(1);

    cy.visit(`/learn/${car?.id}`);
    const titleLabel = cy.get("[data-cy='learn-title']");
    const subLabel = cy.get("[data-cy='learn-subtitle']");

    titleLabel.should("exist");
    subLabel.should("exist");
  });
});
