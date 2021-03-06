import { useState, useEffect } from 'react'
import { useLocalStorage }  from "./useLocalStorage";

export const useDarkMode = (key) => {
    const [darkmode, setDarkMode] = useLocalStorage(key);
    useEffect(() => {
        if(darkmode === true) {
            document.body.classList.add('dark-mode')
        }
        else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkmode])
    return [darkmode, setDarkMode];
}





// call useLocalStorage and pass in the key you want to use to store whether or not dark mode is enabled. Remember, this hook returns an array with a value and a setter in an array, exactly like the state hook, so make sure to capture those values in a const - const [someValue, setSomeValue] = useLocalStorage('your key here')
// Now to add the class to the body. If we need to manipulate the DOM directly, how do we do that? Any direct DOM manipulation is considered a side effect, right? So let's use the effect hook. -Import and set up your effect hook.
// Inside it, check to see if the value from useLocalStorage is true or false.
// If it's true, add the class dark-mode to the body element.
// If it's false, remove the class from the body element. (If you don't quite remember how to do this from ages and ages ago, Google will be your friend here 😉)
// We don't want this effect to run every time anything in the component changes, right? Think about what piece of data this hook depends on, and should be synced with, and add that in its dependency array.