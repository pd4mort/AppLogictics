import { PackageType } from "./package-type.interface";

export interface Dashboard {
    color: string;
    cols: number;
    rows: number;
    packageType: PackageType[];
}