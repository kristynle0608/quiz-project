import { useState } from 'react'
import './EasyQuiz.css'

const question1MedOptions = [
        { id: 1, option: "Attackers", checked: false, correct: true },
        { id: 2, option: "Defenders", checked: false, correct: false },
        { id: 3, option: "Strikers", checked: false, correct: false },
        { id: 4, option: "Protectors", checked: false, correct: false }
    ]

    const question2MedOptions = [
        { id: 1, option: "Harbor", checked: false, correct: false },
        { id: 2, option: "Veto", checked: false, correct: false },
        { id: 3, option: "KAY/O", checked: false, correct: true },
        { id: 4, option: "Chamber", checked: false, correct: false }
    ]

    const question3MedOptions = [
        { id: 1, option: "SMG", checked: false, correct: true },
        { id: 2, option: "Shotgun", checked: false, correct: false },
        { id: 3, option: "Rifle", checked: false, correct: false },
        { id: 4, option: "Sniper Rifle", checked: false, correct: false }
    ]

    const question4MedOptions = [
        { id: 1, option: "Mosh Pit", checked: false, correct: false },
        { id: 2, option: "Wingman", checked: false, correct: false },
        { id: 3, option: "Dizzy", checked: false, correct: false },
        { id: 4, option: "Thrash", checked: false, correct: true }
    ]

    const question5MedOptions = [
        { id: 1, option: "Syria", checked: false, correct: false },
        { id: 2, option: "Morocco", checked: false, correct: true },
        { id: 3, option: "Egypt", checked: false, correct: false },
        { id: 4, option: "Saudi Arabia", checked: false, correct: false }
    ]

function MediumQuiz() {
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
            <p>Which <b>side</b> carries and plants the Spike?</p>
            {question1MedOptions.map((option) => (
                <>
                    <input 
                        type="radio" 
                        key={option.id} 
                        id={option.option} 
                        name="side-option" 
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
                        ✅ <b>Attackers</b> are responsible for carrying and planting the Spike.
                    </div>
                    <div className={option.checked && option.correct === false ? "p-checked" : "p-unchecked"}>
                        ❌ <b>Attackers</b> are responsible for carrying and planting the Spike.
                    </div>
                </>
            ))}

            <p>Which agent says this ultimate voice line: <i><b>"No one walks away."</b></i>?</p>
            {question2MedOptions.map((option) => (
                <>
                    <input 
                        type="radio" 
                        key={option.id} 
                        id={option.option} 
                        name="voiceline-option" 
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
                        ✅ <b><i>Ally</i> KAY/O</b> says <i>"No one walks away."</i> when activating his ultimate.
                    </div>
                    <div className={option.checked && option.correct === false ? "p-checked" : "p-unchecked"}>
                        ❌ <b><i>Ally</i> KAY/O</b> says <i>"No one walks away."</i> when activating his ultimate.
                    </div>
                </>
            ))}

            <p>What type of gun is the <b>Stinger</b>?</p>
            {question3MedOptions.map((option) => (
                <>
                    <input 
                        type="radio" 
                        key={option.id} 
                        id={option.option} 
                        name="gun-type-option" 
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
                        class="gap-x-5"
                    >
                        {option.option}
                    </label><br></br>

                    <div className={option.checked && option.correct ? "p-checked" : "p-unchecked"}>
                        ✅ The <b><i>Stinger</i></b> is an <b>SMG</b>.
                    </div>
                    <div className={option.checked && option.correct === false ? "p-checked" : "p-unchecked"}>
                        ❌ The <b><i>Stinger</i></b> is an <b>SMG</b>.
                    </div>
                </>
            ))}

            <p>What is the name of Gekko's <i>lil' homie</i>?</p>
            {question4MedOptions.map((option) => (
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
                        ✅ When releasing his ultimate, Gekko calls <b>Thrash</b> his <i>lil' homie</i>.
                    </div>
                    <div className={option.checked && option.correct === false ? "p-checked" : "p-unchecked"}>
                        ❌ When releasing his ultimate, Gekko calls <b>Thrash</b> his <i>lil' homie</i>.
                    </div>
                </>
            ))}

            <p>Which <b>country</b> is <b>Cypher</b> from?</p>
            {question5MedOptions.map((option) => (
                <>
                    <input 
                        type="radio" 
                        key={option.id} 
                        id={option.option} 
                        name="country-option" 
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
                        ✅ Cypher is from <b>Rabat, Morocco</b>.
                    </div>
                    <div className={option.checked && option.correct === false ? "p-checked" : "p-unchecked"}>
                        ❌ Cypher is from <b>Morocco</b>, not <i>{option.option}</i>.
                    </div>
                </>
            ))}
        </>
    )
}

export default MediumQuiz