import React, { Component } from "react";

import { Modal } from "./Modal";
import { Invites } from "./Invites";

import { RootComponentState } from "./root.interface";

export class Root extends Component<{}, RootComponentState> {
  public readonly state: RootComponentState = {
    invites: [],
    opened: false
  };

  public modalToggle(opened: boolean) {
    // (Ревью) Изменил название для более четкого понимания функционала
    this.setState({ opened }); // Первое задание, фикс открытия модалки
  }

  public invite(name: string) {
    this.setState(({ invites }) => {
      invites.push(name);

      return { invites };
    });
  }

  public render() {
    return (
      <>
        <button onClick={() => this.modalToggle(true)}>
          Open invites list
        </button>
        <Modal
          opened={this.state.opened}
          onClose={() => this.modalToggle(false)}
        >
          <Invites
            invites={this.state.invites}
            onAdd={this.invite.bind(this)}
          />
        </Modal>
      </>
    );
  }
}
