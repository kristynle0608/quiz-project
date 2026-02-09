import { useState } from 'react'
import './EasyQuiz.css'

const question1Options = [
    { id: 1, option: "2019", checked: false, correct: false },
    { id: 2, option: "2020", checked: false, correct: true },
    { id: 3, option: "2021", checked: false, correct: false },
    { id: 4, option: "2022", checked: false, correct: false }
]

const question2Options = [
    { id: 1, option: "First-person Shooter", checked: false, correct: true },
    { id: 2, option: "Third-person Shooter", checked: false, correct: false },
    { id: 3, option: "Top-Down/Isometric Shooter", checked: false, correct: false },
    { id: 4, option: "Rail Shooter", checked: false, correct: false }
]

const question3Options = [
    { id: 1, option: "Brimstone", checked: false, correct: false },
    { id: 2, option: "Jett", checked: false, correct: false },
    { id: 3, option: "Sova", checked: false, correct: false },
    { id: 4, option: "Reyna", checked: false, correct: true }
]

const question4Options = [
    { id: 1, option: "3", checked: false, correct: false },
    { id: 2, option: "4", checked: false, correct: false },
    { id: 3, option: "5", checked: false, correct: true },
    { id: 4, option: "6", checked: false, correct: false }
]

const question5Options = [
    { id: 1, option: "Rockstar Games", checked: false, correct: false },
    { id: 2, option: "Riot Games", checked: false, correct: true },
    { id: 3, option: "Valve", checked: false, correct: false },
    { id: 4, option: "Epic Games", checked: false, correct: false }
]

function EasyQuiz() {
    const [isDisabled1, setIsDisabled1] = useState(false);
    const [selectedValue1, setSelectedValue1] = useState("");
    
    const [isDisabled2, setIsDisabled2] = useState(false);
    const [selectedValue2, setSelectedValue2] = useState("");

    const [isDisabled3, setIsDisabled3] = useState(false);
    const [selectedValue3, setSelectedValue3] = useState("");

    const [isDisabled4, setIsDisabled4] = useState(false);
    const [selectedValue4, setSelectedValue4] = useState("")

    const [isDisabled5, setIsDisabled5] = useState(false);
    const [selectedValue5, setSelectedValue5] = useState("")

    function handleChange1(e, item) {
        setSelectedValue1(e.target.value);
        setIsDisabled1(true);

        item.checked = true;
    }

    function handleChange2(e, item) {
        setSelectedValue2(e.target.value);
        setIsDisabled2(true);

        item.checked = true;
    }

    function handleChange3(e, item) {
        setSelectedValue3(e.target.value);
        setIsDisabled3(true);

        item.checked = true;
    }

    function handleChange4(e, item) {
        setSelectedValue4(e.target.value);
        setIsDisabled4(true);

        item.checked = true;
    }

    function handleChange5(e, item) {
        setSelectedValue5(e.target.value);
        setIsDisabled5(true);

        item.checked = true;
    }

    return (
        <>
            <p>What <b>year</b> was Valorant <b>officially</b> released?</p>
            {question1Options.map((option) => (
                <>
                    <input 
                        type="radio" 
                        key={option.id} 
                        id={option.option} 
                        name="year-option" 
                        value={option.option} 
                        checked={selectedValue1 === option.option}
                        onChange={(e) => handleChange1(e, option)}
                        disabled={isDisabled1}
                    >
                    </input>
                    <label 
                        htmlFor={option.option}
                        className={
                            option.checked && option.correct ? "label-correct" 
                            : option.checked && option.correct === false ? "label-incorrect" : ""
                        }
                    >
                        {option.option}
                    </label><br></br>

                    <div className={option.checked && option.correct ? "p-checked" : "p-unchecked"}>
                        ✅ Valorant was released on <b>June 2, 2020</b>.
                    </div>
                    <div className={option.checked && option.correct === false ? "p-checked" : "p-unchecked"}>
                        ❌ Valorant was released on <b>June 2, 2020</b>.
                    </div>
                </>
            ))}

            <p>What <b>type</b> of shooter game is Valorant <i>(by perspective)</i>?</p>
            {question2Options.map((option) => (
                <>
                    <input 
                        type="radio" 
                        key={option.id} 
                        id={option.option} 
                        name="type-option" 
                        value={option.option}
                        checked={selectedValue2 === option.option}
                        onChange={(e) => handleChange2(e, option)}
                        disabled={isDisabled2}
                    >
                    </input>
                    <label 
                        htmlFor={option.option}
                        className={
                            option.checked && option.correct ? "label-correct" 
                            : option.checked && option.correct === false ? "label-incorrect" : ""
                        }
                    >   
                        {option.option}
                    </label><br></br>

                    <div className={option.checked && option.correct ? "p-checked" : "p-unchecked"}>
                        ✅ Valorant is a <b>first-person shooter</b> game.
                    </div>
                    <div className={option.checked && option.correct === false ? "p-checked" : "p-unchecked"}>
                        ❌ Valorant is a <b>first-person shooter</b> game, not a <i>{option.option.toLowerCase()}</i>.
                    </div>
                </>
            ))}

            <p>Which of the following <i><b>agents</b></i> is <b>NOT</b> a part of the original lineup?</p>
            {question3Options.map((option) => (
                <>
                    <input 
                        type="radio" 
                        key={option.id} 
                        id={option.option} 
                        name="agent-option" 
                        value={option.option}
                        checked={selectedValue3 === option.option}
                        onChange={(e) => handleChange3(e, option)}
                        disabled={isDisabled3}
                    >
                    </input>
                    <label 
                        htmlFor={option.option}
                        className={
                            option.checked && option.correct ? "label-correct" 
                            : option.checked && option.correct === false ? "label-incorrect" : ""
                        }
                    >
                        {option.option}
                    </label><br></br>

                    <div className={option.checked && option.correct ? "p-checked" : "p-unchecked"}>
                        ✅ Reyna is <b>not</b> a part of the original lineup.
                    </div>
                    <div className={option.checked && option.correct === false ? "p-checked" : "p-unchecked"}>
                        ❌ <i><b>{option.option}</b></i> is a part of the original lineup; <b>Reyna</b> is the correct answer.
                    </div>
                </>
            ))}

            <p>What is the <b>maximum</b> number of <b><i>players</i></b> that a Valorant team can have?</p>
            {question4Options.map((option) => (
                <>
                    <input 
                        type="radio" 
                        key={option.id} 
                        id={option.option} 
                        name="team-option" 
                        value={option.option}
                        checked={selectedValue4 === option.option}
                        onChange={(e) => handleChange4(e, option)}
                        disabled={isDisabled4}
                    >
                    </input>
                    <label 
                        htmlFor={option.option}
                        className={
                            option.checked && option.correct ? "label-correct" 
                            : option.checked && option.correct === false ? "label-incorrect" : ""
                        }
                    >
                        {option.option}
                    </label><br></br>

                    <div className={option.checked && option.correct ? "p-checked" : "p-unchecked"}>
                        ✅ A Valorant team can have at most <b>5</b> players.
                    </div>
                    <div className={option.checked && option.correct === false ? "p-checked" : "p-unchecked"}>
                        ❌ A Valorant team can have at most <b>5</b> players.
                    </div>
                </>
            ))}

            <p>Which <b>game company</b> created Valorant?</p>
            {question5Options.map((option) => (
                <>
                    <input 
                        type="radio" 
                        key={option.id} 
                        id={option.option} 
                        name="company-option" 
                        value={option.option}
                        checked={selectedValue5 === option.option}
                        onChange={(e) => handleChange5(e, option)}
                        disabled={isDisabled5}
                    >
                    </input>
                    <label 
                        htmlFor={option.option}
                        className={
                            option.checked && option.correct ? "label-correct" 
                            : option.checked && option.correct === false ? "label-incorrect" : ""
                        }
                    >
                        {option.option}
                    </label><br></br>

                    <div className={option.checked && option.correct ? "p-checked" : "p-unchecked"}>
                        ✅ <b>Riot Games</b>, whom also created <i>League of Legends</i>, released Valorant.
                    </div>
                    <div className={option.checked && option.correct === false ? "p-checked" : "p-unchecked"}>
                        ❌ <i><b>{option.option}</b></i> may have created some popular shooting games, but <b>Riot Games</b> is the correct answer.
                    </div>
                </>
            ))}
        </>
    )
}

export default EasyQuiz