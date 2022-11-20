import styles from './index.less';
import DayCard from '@/components/dayCard';
import { getDayCardData } from './fakeData';
import Time from '@/components/time';
import SearchEngine from '@/components/searchEngine';
export default function IndexPage() {
  return (
    <div className={styles.bg}>
      <Time className={styles.time}/>
      <SearchEngine className={styles.searchEngine}/>
    </div>
  );
}
