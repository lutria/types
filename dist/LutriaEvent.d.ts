declare enum EventType {
  StreamScanRequest = "Stream_Scan_Request",
}
interface LutriaEvent {
  eventId: string;
  type: EventType;
}
export default LutriaEvent;
