import { useState } from 'react'

function EasyQuiz() {
    const [isDisabled1, setIsDisabled1] = useState(false);
    const [selectedValue1, setSelectedValue1] = useState("");
    
    const [isDisabled2, setIsDisabled2] = useState(false);
    const [selectedValue2, setSelectedValue2] = useState("");
    // const [state3, setState3] = useState(false);
    // const [state4, setState4] = useState(false);
    // const [state5, setState5] = useState(false);

    const handleChange1 = (e) => {
        setSelectedValue1(e.target.value);
        setIsDisabled1(true);
    }

    const handleChange2 = (e) => {
        setSelectedValue2(e.target.value);
        setIsDisabled2(true);
    }
 
    const question1Options = [
        { id: 1, option: "2019" },
        { id: 2, option: "2020" },
        { id: 3, option: "2021" },
        { id: 4, option: "2022" }
    ]

    const question2Options = [
        { id: 1, option: "First-person Shooter" },
        { id: 2, option: "Third-person Shooter" },
        { id: 3, option: "Top-Down/Isometric Shooter" },
        { id: 4, option: "Rail Shooter" }
    ]

    const question3Options = [
        { id: 1, option: "Brimstone" },
        { id: 2, option: "Jett" },
        { id: 3, option: "Sova" },
        { id: 4, option: "Reyna" }
    ]

    const question4Options = [
        { id: 1, option: 3 },
        { id: 2, option: 4 },
        { id: 3, option: 5 },
        { id: 4, option: 6 }
    ]

    const question5Options = [
        { id: 1, option: "Rockstar Games" },
        { id: 2, option: "Riot Games" },
        { id: 3, option: "Valve" },
        { id: 4, option: "Epic Games" }
    ]

    return (
        <>
            <p>What year did Valorant come out?</p>
            {question1Options.map((option) => (
                <>
                    <input 
                        type="radio" 
                        key={option.id} 
                        id={option.option} 
                        name="year-option" 
                        value={option.option} 
                        checked={selectedValue1 === option.option}
                        onChange={handleChange1}
                        disabled={isDisabled1}
                    >
                    </input>
                    <label htmlFor={option.option}>{option.option}</label><br></br>
                </>
            ))}

            {/* Use useEffect to show which one is correct or wrong */}

            <p>What type of shooter game is Valorant (by perspective)?</p>
            {question2Options.map((option) => (
                <>
                    <input 
                        type="radio" 
                        key={option.id} 
                        id={option.option} 
                        name="type-option" 
                        value={option.option}
                        checked={selectedValue2 === option.option}
                        onChange={handleChange2}
                        disabled={isDisabled2}
                    >
                    </input>
                    <label for={option.option}>{option.option}</label><br></br>
                </>
            ))}

            <p>Which of the following agents is NOT a part of the original lineup?</p>
            {question3Options.map((option) => (
                <>
                    <input type="radio" key={option.id} id={option.option} name="agent-option" value={option.option}></input>
                    <label for={option.option}>{option.option}</label><br></br>
                </>
            ))}

            <p>What is the maximum number of players that a Valorant team can have?</p>
            {question4Options.map((option) => (
                <>
                    <input type="radio" key={option.id} id={option.option} name="team-option" value={option.option}></input>
                    <label for={option.option}>{option.option}</label><br></br>
                </>
            ))}

            <p>Which game company created Valorant?</p>
            {question5Options.map((option) => (
                <>
                    <input type="radio" key={option.id} id={option.option} name="company-option" value={option.option}></input>
                    <label for={option.option}>{option.option}</label><br></br>
                </>
            ))}
        </>
    )
}

export default EasyQuiz