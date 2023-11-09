import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={css.notificationText}>{message}</p>;
};

export default Notification;
