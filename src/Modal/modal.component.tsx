import React, { Component, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import { ModalComponentState, ModalComponentProps } from "./modal.interface";

import { Close } from "../Close";

import "./style.css";

// (Review) Нормальные названия для интерфейсов, что бы было понятно
export class Modal extends Component<ModalComponentProps, ModalComponentState> {
  public readonly state: ModalComponentState = {
    opened: false
  };

  public static getDerivedStateFromProps(
    props: ModalComponentProps,
    state: ModalComponentState
  ): ModalComponentState {
    return { opened: props.opened };
  }

  public render(): ReactNode {
    return (
      <CSSTransition
        classNames={{
          enter: "modal__enter",
          enterActive: "modal__enter-active",
          enterDone: "modal__enter-done",
          exit: "modal__exit",
          exitActive: "modal__exit-active",
          exitDone: "modal__exit-done"
        }}
        in={this.state.opened}
        timeout={300}
      >
        <div className="modal">
          <div className="modal__content">
            {/* (Review) Стиль кнопки закрытия относится к модалке, значит и быть должен у модалки */}
            <Close className="modal__close" onClick={this.props.onClose} />
            {this.props.children}
          </div>
        </div>
      </CSSTransition>
    );
  }
}
