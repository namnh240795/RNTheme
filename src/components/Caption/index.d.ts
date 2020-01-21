export type TextType =
  | 'white'
  | 'warning'
  | 'success'
  | 'primary'
  | 'placeholder'
  | 'link'
  | 'hint'
  | 'disabled'
  | 'danger'
  | 'black';

export interface TextObject {
  type?: TextType;
}

export default class Caption extends React.Component<TextObject, any> {}
