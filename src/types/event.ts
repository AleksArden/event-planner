export type EventWithId = {
  title: string;
  description: string;
  selectDate: string;
  selectTime: string;
  city: string;
  imageURL: string;
  id: string;
};
export type EventWithoutId = Omit<EventWithId, 'id'>;
