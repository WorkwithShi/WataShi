import { useEffect,useState } from "react";

const useKonamiCode = (onKonamiCode) => {
    const [inputSequence, setInputSequence] = useState([]);

    const konami = ['KeyS','KeyH','KeyI'];

    const handleKeyDown = (event) => {
        setInputSequence(prev => {
            const newSequence = [...prev, event.code];
            if (newSequence.length > konami.length){
                newSequence.shift();
            }
            if(newSequence.join('')===konami.join('')){
                onKonamiCode();
            }
            return newSequence;

        });
            
    };

    useEffect(()=>{
        window.addEventListener('keydown',handleKeyDown);
        return () => {
            window.removeEventListener('keydown',handleKeyDown);
        };
    },[]);
    

    return inputSequence;

};

export default useKonamiCode;