export enum ServerEndpoints {
  Login = '/login',
  Logout = '/logout',
  Quests = '/quest',
  QuestExtended = '/quest/:questId',
  QuestBookings = '/quest/:questId/booking',
  UserBookings = '/reservation',
  Booking = '/reservation/:reservationId'
}
