            

import css from "./statistics.module.css"

 

export const Statistic = (props) => {
    const { valueBad, valueGood, valueNeutral, valuePositive, valueTotal } = props;
 
return (
    <>
        <div className={css.statistic}>
            <li className={css.liStatistic}>Good: <span>{valueGood}</span></li>
            <li className={css.liStatistic}>Neutral: <span>{valueNeutral}</span></li>
            <li className={css.liStatistic}>Bad: <span>{valueBad}</span></li>
            <li className={css.liStatistic}>Total: <span>{valueTotal}</span></li>
            <li className={css.liStatistic}>Positive: <span>{valuePositive}</span>%</li>
        </div>
    </>
    );

};