export interface IValidationOuterMessage {
  [key: string]: IValidationInnterMessage[];
}

interface IValidationInnterMessage {
  type: string;
  message: string;
}

export function mapValidationMessage(
  newMessage: IValidationOuterMessage,
  oldMessage: IValidationOuterMessage
) {
  if (newMessage !== null) {
    const mappedObject: IValidationOuterMessage = Object.assign(
      oldMessage,
      newMessage
    );
    return mappedObject;
  } else {
    return oldMessage;
  }
}
