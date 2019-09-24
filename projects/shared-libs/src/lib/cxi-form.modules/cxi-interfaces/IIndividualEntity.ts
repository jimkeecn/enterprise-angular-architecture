export interface IIndividualEntity {
  title?: string;
  titleId?: number;
  firstName: string;
  middleName: string;
  lastName: string;
  dob: Date;
  fullAddress: string;
  isPEP: boolean;
  sof?: string;
  pepDetail?: string;
  email?: string;
  mobileNo?: string;
  receiveCommunicationId?: number;
  receiveCommunication?: string;
  tfn?: string;
}
