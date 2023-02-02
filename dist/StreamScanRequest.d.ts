import DataSecurity from "./common/DataSecurity";
import { LutriaEvent } from "./LutriaEvent";
interface StreamScanRequest extends LutriaEvent {
  streamId: string;
  name: string;
  scanCursor?: string;
  externalId: string;
  externalType?: string;
  security: DataSecurity;
}
export default StreamScanRequest;
