import React, { FC, useState, useCallback, useEffect } from "react";
import { InvitesComponentProps } from "./invites.interface";

import "./style.css";

export const Invites: FC<InvitesComponentProps> = ({ invites, onAdd }) => {
  const [name, setName] = useState("");
  const handleChangeName = useCallback(
    (event: any) => {
      setName(event.target.value);
    },
    [setName]
  );
  const handleSubmit = useCallback(() => {
    onAdd(name);
    setName("");
  }, [name, onAdd]);

  useEffect(() => {
    setName("");
  }, [invites]);

  return (
    <div className="invites">
      <div className="invites__form">
        <input
          className="invites__form-input"
          onChange={handleChangeName}
          type="text"
          value={name}
        />
        <button className="invites__form-submit" onClick={handleSubmit}>
          Invite
        </button>
      </div>
      <div className="invites__delimiter" />
      <ul className="invites__items">
        {invites.map(name => (
          <li className="invites__item">{name}</li>
        ))}
      </ul>
    </div>
  );
};
