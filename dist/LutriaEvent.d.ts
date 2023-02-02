declare enum EventType {
  StreamScanRequest = "StreamScanRequest",
}
interface LutriaEvent {
  eventId: string;
  type: EventType;
}
export { EventType, LutriaEvent };
