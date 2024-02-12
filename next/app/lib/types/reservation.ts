export interface Reservation {
  guestName?: string,
  confirmationNumber?: number,
  status: string,
  id: string,
  propertyId: number,
  arrival: string,
  departure: string,
  nights: number
}
