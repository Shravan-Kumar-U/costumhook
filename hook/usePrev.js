import { useEffect, useRef } from "react";
//For first time it will follow the order like following
export function usePrev(value){
    const ref = useRef();//value comes here. here previous value was undefined. here undefined is updated to the value which came form the parameter
    console.log("re-render happened with new value " + value);
    

    useEffect(()=>{
        console.log("update the value of the ref to be " + value);
        
        ref.current = value;//2.value comes here. but first return will execute first then the updated value will store here
        //Here change in the value does'nt rerender the usePrev hook(component)
    }, [value])

    console.log("return the current value " + ref.current);
    return ref.current;//1.returns the undefined value which is the prev value of ref
}
//Returns the value first and then effects gets called later