/* eslint no-eval: 0 */
import React, { useRef, useState, useEffect } from 'react';
import './../../App.scss'
import './Calculator.scss'
import './../button/Button.scss'
import { button_list, BUTTON_ACTION} from "../button/ButtonsList";


const Calculator = () => {    

    const buttonsRef = useRef(null);
    const expressionRef = useRef(null);

    const [expression, setExpression] = useState('');
    const [theme, setTheme] = useState('white');

    useEffect (()=>{
        const currentTheme = localStorage.getItem('theme-color')
        if (currentTheme) {
            setTheme(currentTheme)
        }
    }, [])

    const toggleTheme = (theme) => {
        setTheme(theme); 
        localStorage.setItem('theme-color', theme)
    }

    const buttonClick = (item) => {
        const expressionDisplay = expressionRef.current;

        if (item.action === BUTTON_ACTION.ADD) {
            addSpan(item.label);
            const operator = item.label !== 'x' ? item.label : '*';
            setExpression(expression + operator);
        }

        if (item.action === BUTTON_ACTION.DELETE) {
            expressionDisplay.parentNode.querySelector('span:last-child').remove();
            setExpression(expressionDisplay);
        }

        if (item.action === BUTTON_ACTION.AC) {
            expressionDisplay.parentNode.querySelector('div:last-child').innerHTML = '';
            expressionDisplay.innerHTML = '';
            setExpression('');
        }

        if (item.action === BUTTON_ACTION.EQUAL) {
            if (expression.trim().length <= 0) return;

            expressionDisplay.parentNode.querySelector('div:last-child').remove();

            const cloneNode = expressionDisplay.cloneNode(true);
            expressionDisplay.parentNode.appendChild(cloneNode);

            const transform = `translateY(${-(expressionDisplay.offsetHeight + 10) + 'px'}) scale(0.4)`;

            try {
                let res = eval(expression);

                setExpression(res.toString());
                setTimeout(() => {
                    cloneNode.style.transform = transform;
                    expressionDisplay.innerHTML = '';
                    addSpan(Math.floor(res * 100000000) / 100000000);
                }, 200);
            } catch {
                setTimeout(() => {
                    cloneNode.style.transform = transform;
                    cloneNode.innerHTML = 'Syntax err';
                    setTimeout(()=>{
                        setExpression('');
                        expressionDisplay.innerHTML = '';
                    },500)
                }, 200);
            } finally {}
        }
    }

    const addSpan = (content) => {
        const expressionDisplay = expressionRef.current;
        const span = document.createElement('span');

        span.innerHTML = content;
        span.style.opacity = '0';
        expressionDisplay.appendChild(span);

        const width = span.offsetWidth + 'px';
        span.style.width = '0';

        setTimeout(() => {
            span.style.opacity = '1';
            span.style.width = width;
        }, 100);
    }


    return (
        <div className={`calculator ${theme}`}>
            {/* THEME AREA */}
            <div className='theme'>
                <button className='buttons_theme_item' id='white'
                onClick={()=> toggleTheme('white')}></button>
                <button className='buttons_theme_item' id='green'
                onClick={()=> toggleTheme('green')}></button>
                <button className='buttons_theme_item' id='orange'
                onClick={()=> toggleTheme('orange')}></button>
                <button className='buttons_theme_item' id='blue'
                onClick={()=> toggleTheme('blue')}></button>
                <button className='buttons_theme_item' id='gray'
                onClick={()=> toggleTheme('gray')}></button>
            </div>

            {/* SCREEN AREA */}
            <div className='screen'>            
                <div ref={expressionRef} className='result'></div>
                <div className='result'></div>
            </div>

             {/* BUTTONS AREA */}
            <div className='number_pad'>
                <div ref={buttonsRef} className="buttons"> 
                {
                    button_list.map((item) => (
                        <button
                            className={`buttons_${item.class} ${theme}`}
                            onClick={() => buttonClick(item)}
                        >
                            {item.label}
                        </button>
                    ))
                }
                </div>
            </div>                
        </div>
    );
    
}
export default Calculator