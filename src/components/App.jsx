import './App.css'
import { Statistic } from "./Statistics/statistics";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notyfication';
import { useState } from "react";
import { Section } from './Section/Section';


const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};


export const App = () => {
    const [data, setData] = useState({ ...INITIAL_STATE});
    const [isFeedback, setIsFeedback] = useState(false);

    const onClick = (evt) => {
        setData(prevValue => {
            if(isFeedback===false){setIsFeedback(true)}
            return { ...prevValue, [evt.target.id]: prevValue[evt.target.id]+1}
        })
    }

    const countTotalFeedback = () => {
        return data.good+ data.neutral+ data.bad;
    }
    
    const countPositiveFeedbackPercentage = () => {
        return data.good >0 ? Math.round(data.good/countTotalFeedback() * 100) : 0;
    }


  return (
      <>
        <div>
        <Section title="Please leave feedback" children={<FeedbackOptions options={Object.keys(data)} onClick={onClick} />} ></Section>
        <Section title="Statistics" children={isFeedback === true ?
            <Statistic
                  valueBad={data.bad}
                  valueGood={data.good}
                  valueNeutral={data.neutral}
                  valuePositive={countPositiveFeedbackPercentage()}
                  valueTotal={countTotalFeedback()} />
            :
            <Notification message="There is no feedback"></Notification>}>
        </Section>
        </div>
   </>
  );
};
