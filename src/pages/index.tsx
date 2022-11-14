import styles from './index.less';
import DayCard from '@/components/dayCard';
import { getDayCardData } from './fakeData';
export default function IndexPage() {
  return (
    <div className={styles.bg}>
      <DayCard dataSource={getDayCardData()}/>
    </div>
  );
}
