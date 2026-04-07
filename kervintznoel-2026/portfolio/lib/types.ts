export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Honeypot — must be empty; bots fill this */
  website?: string;
}
