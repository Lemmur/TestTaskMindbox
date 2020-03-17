export type OnAddType = (name: string) => void;

export interface InvitesComponentProps {
  invites: string[];
  onAdd: OnAddType;
}
