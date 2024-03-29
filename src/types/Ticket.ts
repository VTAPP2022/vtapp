import { AirtableEvent } from "./Event";

export interface TicketEntry {
  id: string;
  application_no: string;
  applicant_name: string;
  applicant_email: string;
  applicant_phn_no: number;
  date_of_birth: string;
  qrcode_expired: boolean;
  registered_events: number[];
}

export interface TicketSearchParams {
  applicationNumber: string;
  dateOfBirth: string;
  captchaToken: string;
}

export interface QRCodeRowDrizzle {
  dateOfBirth: string;
  id: string;
  applicantEmail: string;
  applicantName: string;
  applicantPhoneNo: number;
  applicationNo: string;
  eventId: number;
  qrcodeExpired: boolean;
  scannedBy?: string;
  scannedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface QRCodeRowManualDrizzle {
  id: string;
  application_no: string;
  applicant_name: string;
  applicant_email: string;
  applicant_phn_no: number;
  date_of_birth: string;
  qrcode_expired: boolean;
  event_id: number;
  scanned_by?: string;
  scanned_at?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface EventsRegistered extends QRCodeRowDrizzle {
  event: AirtableEvent;
}
