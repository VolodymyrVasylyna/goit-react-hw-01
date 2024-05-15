import css from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={css["profile-container"]}>
      <div className={css["profile-info"]}>
        <div className={css["avatar-container"]}>
          <img
            className={css["avatar-img"]}
            src={props.image}
            alt="User avatar"
          />
        </div>
        <p className={css["avatar-name"]}>{props.name}</p>
        <p className={css["avatar-tag"]}>@{props.tag}</p>
        <p className={css["avatar-location"]}>{props.location}</p>
      </div>
      <ul className={css["stats-list"]}>
        <li className={css["stats-item"]}>
          <span className={css["label"]}>Followers</span>
          <span className={css["value"]}>{props.stats.followers}</span>
        </li>
        <li className={css["stats-item"]}>
          <span className={css["label"]}>Views</span>
          <span className={css["value"]}>{props.stats.views}</span>
        </li>
        <li className={css["stats-item"]}>
          <span className={css["label"]}>Likes</span>
          <span className={css["value"]}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
