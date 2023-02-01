import DataSecurity from "./common/DataSecurity";
interface StreamScanRequest {
  streamId: string;
  name: string;
  scanCursor?: string;
  externalId: string;
  externalType?: string;
  security: DataSecurity;
}
export default StreamScanRequest;
