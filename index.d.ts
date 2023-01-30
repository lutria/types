declare module "common/DataSecurity" {
    interface DataSecurity {
        protected: boolean;
    }
    export default DataSecurity;
}
declare module "StreamScanRequest" {
    import DataSecurity from "common/DataSecurity";
    interface StreamScanRequest {
        streamId: string;
        name: string;
        scanCursor?: string;
        externalId: string;
        externalType?: string;
        security: DataSecurity;
    }
    export default StreamScanRequest;
}
declare module "index" {
    import StreamScanRequest from "StreamScanRequest";
    export { StreamScanRequest };
}
