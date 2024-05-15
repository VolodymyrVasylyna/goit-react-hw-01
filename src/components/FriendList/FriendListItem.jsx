import clsx from 'clsx';

import css from "./FriendList.module.css";

export default function FriendListItem({ name, avatar, isOnline }) {
  return (
    <div className={css["friends"]}>
      <img
        className={css["friendAvatar"]}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={css["friendName"]}>{name}</p>
      <p
        className={clsx(css.friendStatus, {
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}
      >
        {isOnline ? `online` : `offline`}
      </p>
    </div>
  );
}
