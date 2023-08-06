export type Event = {
  title: string;
  description: string;
  selectDate: string;
  selectTime: string;
  location: string;
  addPicture: string;
};

export type EventWithId = {
  data: Event;
  eventId: string;
};
