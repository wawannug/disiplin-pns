import { useEffect, useState } from "react";
// import useSound from "use-sound";
// import play from "../sounds/play.mp3";
// import correct from "../sounds/correct.mp3";
// import wrong from "../sounds/wrong.mp3";

export default function Trivia({
    kuis,
    questionNumber,
    setQuestionNumber,
    setTimeOut,
}) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    // const [letsPlay] = useSound(play);
    // const [correctAnswer] = useSound(correct);
    // const [wrongAnswer] = useSound(wrong);

    // useEffect(() => {
    //     letsPlay();
    // }, [letsPlay]);



    useEffect(() => {
        setQuestion(kuis[questionNumber - 1]);
    }, [kuis, questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active");
        setClassName(a.correct ? "answer correct" : "answer wrong");

        delay(500, () => {
            if (a.correct) {
                // correctAnswer();
                delay(100, () => {
                    if (questionNumber === kuis.length) {
                        setQuestionNumber((prev) => prev + 1);
                        setTimeOut(true)
                    } else {
                        setQuestionNumber((prev) => prev + 1);
                        setSelectedAnswer(null);
                    }
                });
            } else {
                // wrongAnswer();
                delay(100, () => {
                    setTimeOut(true);
                });

            }
        })
    };
    return (
        <div className="flex  flex-col items-center justify-around ">
            <div className="w-full md:w-4/5 bg-gradient-to-b from-[#100240] to-black text-center p-5 rounded-2xl border-2 text-sm md:text-lg ">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a) => (
                    <div
                        key={a.text}
                        className={selectedAnswer === a ? className : "answer"}
                        onClick={() => !selectedAnswer && handleClick(a)}
                    >
                        {a.text}
                    </div>
                ))}
            </div>
        </div>
    );
}