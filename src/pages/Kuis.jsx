import "./Kuis.css";
import { useEffect, useMemo, useState } from "react";
import Start from '../components/Start'
import Timer from "../components/Timer";
import Trivia from "../components/Trivia";
import { kuis } from "../data/kuis"

function Kuis() {
    const [username, setUsername] = useState(null);
    const [timeOut, setTimeOut] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [earned, setEarned] = useState(0);

    const moneyPyramid = useMemo(
        () =>
            [
                { id: 1, level: "1" },
                { id: 2, level: "2" },
                { id: 3, level: "3" },
                { id: 4, level: "4" },
                { id: 5, level: "5" },
                { id: 6, level: "6" },
                { id: 7, level: "7" },
                { id: 8, level: "8" },
                { id: 9, level: "9" },
                { id: 10, level: "10" },
                { id: 11, level: "11" },
                { id: 12, level: "12" },
                { id: 13, level: "13" },
                { id: 14, level: "14" },
                { id: 15, level: "15" },
            ].reverse(),
        []
    );

    useEffect(() => {
        questionNumber > 1 &&
            setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).level);
    }, [questionNumber, moneyPyramid]);

    return (
        <div>
            <div className="min-h-screen max-h-2xl flex bg-[#020230] text-white">
                {!username ? (
                    <Start setUsername={setUsername} />
                ) : (
                    <>
                        <div className="w-3/4 flex flex-col bg-[url('https://drive.google.com/uc?export=view&id=1rrDXUsV7klM3qz4l3TnaGQmfcSOykV2s')] bg-no-repeat bg-cover bg-center">
                            {timeOut ? (
                                questionNumber === kuis.length + 1 ? (
                                    <div className="relative top-0 bottom-0 left-0 right-0 m-auto bg-slate-600 p-10 rounded-full">
                                        <h1 className="">Selamat {username}, Anda berhasil memenangkan kuis ini</h1>
                                    </div>
                                ) : (
                                    <div className="relative top-0 bottom-0 left-0 right-0 m-auto bg-slate-600 p-10 rounded-full">
                                        <h1 className="relative top-0 bottom-0 left-0 right-0 m-auto">Mohon maaf, jawaban Anda salah atau waktu habis, Anda terhenti di level ke-{Number(earned) + 1}</h1>
                                    </div>
                                )
                            ) : (
                                <>
                                    <div className="h-1/4 relative">
                                        <div className="w-[56px] h-[56px] ml-[-28px] timer left-1/2 text-xl font-bold flex items-center justify-center absolute border-4 rounded-full bottom-[10px]">
                                            <Timer
                                                setTimeOut={setTimeOut}
                                                questionNumber={questionNumber}
                                            />
                                        </div>
                                    </div>
                                    <div className="h-3/4 max-h-full ">
                                        <Trivia
                                            kuis={kuis}
                                            questionNumber={questionNumber}
                                            setQuestionNumber={setQuestionNumber}
                                            setTimeOut={setTimeOut}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="md:w-1/4 flex items-center justify-center ">
                            <ul className="mt-16 outline outline-gray-400 outline-1 lg:px-16 ">
                                {moneyPyramid.map((m) => (
                                    <li
                                        key={m.id}
                                        className={
                                            questionNumber === m.id
                                                ? "bg-teal-500 flex items-center rounded-md"
                                                : "flex items-center rounded-md"
                                        }
                                    >
                                        <span className="text-md md:text-xl p-1 mx-auto text-center justify-self-center" key={m.id}>Level {m.level}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            </div>
            <div className="bg-[#020230] h-20"></div>
        </div>
    );
}

export default Kuis;