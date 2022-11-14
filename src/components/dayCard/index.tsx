import styles from './index.less';

export interface DayCardProps {
    dataSource: {
        platform: string,
        newsTitle: {
            new: string
        }[],
    }[]
}

const DayCard = (props: DayCardProps) => {
    const { dataSource } = props;

    return (
        <div className={styles.dayCard}>
            <div className={styles.platform}>
                {dataSource.map(item => {
                    return (<span>{item.platform}</span>)
                })}
            </div>
            <div className={styles.news}>
                {dataSource[0].newsTitle.map(item => {
                    return (<div>{item.new}</div>)
                })}
            </div>
        </div>
    )
}

export default DayCard;