export class BookingPage {

  getRow() {
    return cy.get(".variation-item ");
  }
}

export const bookingPage = new BookingPage()