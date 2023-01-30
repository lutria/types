import DataSecurity from "./common/DataSecurity";

interface StreamScanRequest {
  streamId: string;
  name: string;
  scanCursor?: string;
  externalId: string;
  externalType?: string;
  security: DataSecurity; // included for log redaction
  // TODO: any more fields?
}

export default StreamScanRequest;
