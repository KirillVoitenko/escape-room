import { UserBooking } from '@entities/booking';
import { Quest } from '@entities/quest';

export type QuestBooking = UserBooking<Quest>;
