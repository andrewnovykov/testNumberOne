import { bookingPage } from "../../support/page_object/booking-page";

describe("Booking", () => {

    const personName = "Rajat"
    const serviseTitle = "Consultation";
    const shortLocation = "123 Somewhere";
    const servise = "Hair Styling"
    const location = "123 Somewhere From California"

  it("User should be able to book an apoiment for Consultation with Rajat", () => {
    cy.visit("");
    cy.contains(shortLocation).click({ force: true });
    cy.contains(shortLocation).should('be.visible')

    cy.contains(servise).click();
    cy.contains(personName).click({ timeout: 7000 });
    cy.get(".main").contains(personName).should("have.text", personName);
    bookingPage.getRow().each((el) => {});
   
    

    // <span>Sergii</span>
    // $("*=Sergii");


    // cy.contains("ngx");
    // cy.contains("admin"); //contains some string
    // cy.url().should("include", "/pages");
  });

//   it.skip("Testing form input", () => {
//     cy.visit("");
//     cy.contains("Forms").click();
//     cy.contains("Form Layouts").click();
//     cy.get("#inputEmail"); //select bi ID
//     cy.get(".input-full-width"); //select by calss Name
//     cy.get("[placeholder]"); //select by atribute name
//     cy.get('[placeholder="Email"]'); //select by atribute name & value
//     cy.get('[class="input-full-width size-medium shape-rectangle"]'); //select by calss names
//     cy.get('input[placeholder="Email"]'); //select by tag name and atribute name & value
//     cy.get('[placeholder="Email"][type="email"]'); //select by two different attributes
//     cy.get('input[placeholder="Email"]#inputEmail.input-full-width'); //select by tag name, atribute with value, id & class name
//     cy.get('[data-cy="imputEmail1"]'); //recomended by Cypress | Create own attributes (data-cy="imputEmail1")
//   });

});
