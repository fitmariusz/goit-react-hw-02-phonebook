
import css from "./FeedbackOprions.module.css"
import { changeCapitalization,upperCase } from "change-capitalization"

 

export const FeedbackOptions = (props) => {
    const { options, onClick} = props;
 
    return (
        <>
            <div className={css.feedback}>
                {options.map(option => (
                    <button type="button" id={option} className={css.buttonFeedback} onClick={onClick}>{changeCapitalization(upperCase,option,0)}</button>
                ))}
            </div>
        </>
    );

};