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
        delay(3000, () => {
            setClassName(a.correct ? "answer correct" : "answer wrong");
        });
        // setTimeout(() => {
        //   setClassName(a.correct ? "answer correct" : "answer wrong");
        // }, 3000);

        // setTimeout(() => {
        delay(5000, () => {
            if (a.correct) {
                console.log(questionNumber)
                // correctAnswer();
                delay(1000, () => {

                    if (questionNumber === kuis.length) {
                        setTimeOut(true)
                    } else {
                        setQuestionNumber((prev) => prev + 1);
                        setSelectedAnswer(null);
                    }
                });
            } else {
                // wrongAnswer();
                delay(1000, () => {
                    setTimeOut(true);
                });

            }
        })
    };
    return (
        <div className="h-full flex flex-col items-center justify-around ">
            <div className="w-full md:w-4/5 bg-gradient-to-b from-[#100240] to-black text-center p-5 rounded-2xl border-2 text-lg ">{question?.question}</div>
            <div className="w-full flex justify-center flex-wrap">
                {question?.answers.map((a) => (
                    <div
                        key={a.text}
                        className={selectedAnswer === a ? className : "w-full md:w-2/5 p-2 bg-gradient-to-b from-[#0e0124] to-[#22074d] rounded-2xl cursor-pointer mx-2 mb-3 border-2 text-center text-lg"}
                        onClick={() => !selectedAnswer && handleClick(a)}
                    >
                        {a.text}
                    </div>
                ))}
            </div>
        </div>
    );
}