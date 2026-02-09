import { useState } from 'react'
import './HardQuiz.css'
import bear from '../assets/stuffed-bear-valorant.webp'

const question1HardOptions = [
        { id: 1, option: "Albuquerque, New Mexico, USA, Alpha Earth", checked: false, correct: false },
        { id: 2, option: "Santa Fe County, New Mexico, USA, Alpha Earth", checked: false, correct: true },
        { id: 3, option: "Silver City, New Mexico, USA, Omega Earth", checked: false, correct: false },
        { id: 4, option: "Albuquerque, New Mexico, USA, Omega Earth", checked: false, correct: false }
    ]

    const question2HardOptions = [
        { id: 1, option: "Mary Adeyemi", checked: false, correct: true },
        { id: 2, option: "Tomi Adeyemi", checked: false, correct: false },
        { id: 3, option: "Flora Nwapa", checked: false, correct: false },
        { id: 4, option: "Zulu Sofola", checked: false, correct: false }
    ]

    const question3HardOptions = [
        { id: 1, option: "Abyss", checked: false, correct: false },
        { id: 2, option: "Breeze", checked: false, correct: false },
        { id: 3, option: "Ice Box", checked: false, correct: true },
        { id: 4, option: "Fracture", checked: false, correct: false }
    ]

    const question4HardOptions = [
        { id: 1, option: "Ascent", checked: false, correct: true },
        { id: 2, option: "Bind", checked: false, correct: false },
        { id: 3, option: "Haven", checked: false, correct: false },
        { id: 4, option: "Split", checked: false, correct: false }
    ]

    const question5HardOptions = [
        { id: 1, option: "Seahorse, Turtle", checked: false, correct: false },
        { id: 2, option: "Clam, Fish", checked: false, correct: true },
        { id: 3, option: "Crayfish, Lobster", checked: false, correct: false },
        { id: 4, option: "Shrimp, Crab", checked: false, correct: true }
    ]

function HardQuiz() {
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
            <p>Where is <b>Fracture</b> located?</p>
            {question1HardOptions.map((option) => (
                <>
                    <input 
                        type="radio" 
                        key={option.id} 
                        id={option.option} 
                        name="location-option" 
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
                        ✅ Map <b><i>Fracture</i></b> is located in <b>Santa Fe County, New Mexico, USA, Alpha Earth</b>.
                    </div>
                    <div className={option.checked && option.correct === false ? "p-checked" : "p-unchecked"}>
                        ❌ Map <b><i>Fracture</i></b> is located in <b>Santa Fe County, New Mexico, USA, Alpha Earth</b>.
                    </div>
                </>
            ))}

            <p>What is the name of <b>Phoenix</b>'s younger sister?</p>
            {question2HardOptions.map((option) => (
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
                        ✅ <b>Mary Adeyemi</b> is <i>Phoenix's</i> younger sister.
                    </div>
                    <div className={option.checked && option.correct === false ? "p-checked" : "p-unchecked"}>
                        ❌ <b>Mary Adeyemi</b> is <i>Phoenix's</i> younger sister.
                    </div>
                </>
            ))}

            <p>Which <b>map</b> are these stuffed animals located?</p>
            <img id="bear" src={bear}></img><br></br>
            {question3HardOptions.map((option) => (
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
                    >
                        {option.option}
                    </label><br></br>

                    <div className={option.checked && option.correct ? "p-checked" : "p-unchecked"}>
                        ✅ These ones are located on <b>Ice Box</b>.
                    </div>
                    <div className={option.checked && option.correct === false ? "p-checked" : "p-unchecked"}>
                        ❌ These ones are located on <b>Ice Box</b>.
                    </div>
                </>
            ))}

            <p>Which map was <b>NOT</b> released during <i>Beta</i>?</p>
            {question4HardOptions.map((option) => (
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
                        ✅ <b>Ascent</b> was released in the <i>official launch</i> of Valorant.
                    </div>
                    <div className={option.checked && option.correct === false ? "p-checked" : "p-unchecked"}>
                        ❌ <b>Ascent</b> was released in the <i>official launch</i> of Valorant.
                    </div>
                </>
            ))}

            <p>Which <b>sea animals</b> are on the sides of <i>Breeze</i>'s pyraminds?</p>
            {question5HardOptions.map((option) => (
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
                        ✅ A <b>shrimp</b> and <b>crab</b> are seen on the sides of <i>Breeze</i>'s pyraminds.
                    </div>
                    <div className={option.checked && option.correct === false ? "p-checked" : "p-unchecked"}>
                        ❌ A <b>shrimp</b> and <b>crab</b> are seen on the sides of <i>Breeze</i>'s pyraminds.
                    </div>
                </>
            ))}
        </>
    )
}

export default HardQuiz