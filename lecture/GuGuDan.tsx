import * as React from"react"
import { useState,useRef } from "react"

const GuGuDan = () =>{
    const [first,setFirst] = useState(Math.ceil(Math.random() * 9))
    const [second,setSecond] = useState(Math.ceil(Math.random() * 9))
    const [value,setValue] = useState('');
    const [result,setResult] = useState('');

    const inputEl = useRef<HTMLInputElement>(null)

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const input = inputEl.current;

        if(parseInt(value) === first * second){
            setResult('정답')
            setFirst(Math.ceil(Math.random() * 9))
            setSecond(Math.ceil(Math.random() * 9))
            setValue('')
            // (input){
            //     input.focus()
            // }
            input!.focus() // input은 있다고 확신하기 때문에!. 사용 아니면 if문 사용도 됨
        } else{
            setResult('')
            setValue('')
            input!.focus()            
        }
    }

    return (
        <>
            <div>{first} 곱하기 {second} 는?</div>
            <form>
                <input
                    ref={inputEl}
                    value={value} 
                    type="number" 
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
        </>
    )
}


export default GuGuDan