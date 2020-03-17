export interface ModalComponentState {
  opened: boolean;
}

export interface ModalComponentProps {
  opened: boolean;
  onClose: () => void;
}
