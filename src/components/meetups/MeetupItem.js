import styles from './MeetupItem.module.css';
import Card from '../ui/Card';

const MeetupItem = (props) => {
  const { meetup } = props;
  return (
    <Card>
      <li className={styles.item}>
        <div className={styles.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={styles.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={styles.actions}>
          <button>To Favorites</button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
