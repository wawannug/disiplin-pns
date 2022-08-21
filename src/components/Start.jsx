import { useRef } from "react";

export default function Start({ setUsername }) {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
    };

    return (
        <div className=" flex items-center justify-center flex-col gap-4 mx-auto w-2/3 md:w-1/3 lg:w-1/4" >
            <input
                className="w-full text-center p-1 rounded-xl focus:outline-none text-black"
                placeholder="Nama Anda..."
                ref={inputRef}
            />
            <button className="outline outline-1 p-2 rounded-xl" onClick={handleClick}>
                Mulai Kuis
            </button>
        </div>
    );
}