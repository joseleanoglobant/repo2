import React, { SetStateAction, useState } from "react";

interface IDropdown {
    list: string[],
    filter: React.Dispatch<SetStateAction<string>>
}

export default function Dropdown({ list, filter}: IDropdown) {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    const dropdownSelect = (opt:string) => {
        return opt
    }

    return (
        <div className="dropdown">
            <div className={isActive ? "dropdown__closed" : "dropdown__opened"} onClick={handleToggle}>
                <ul className="dropdown__list">
                    <li>
                        <div className="dropdown__placeholder">Select a category</div>
                    </li>
                    <li>
                        <span className="dropdown__option" onClick={() => {filter('')}}>BROWSE ALL</span>
                    </li>

                    {list.map((p:string, i) => {
                        return <li key={p}><span className="dropdown__option" onClick={() => {
                            filter(p);
                        }}>{p}</span></li>
                    })}
                </ul>
                <style jsx global>{`
                    .dropdown {
                        display: inline-block;
                        width: 270px;
                        height: 52px;
                        margin-right: 80px;
                        cursor: pointer;
                        position: relative;
                        z-index: 99;
                    }
                    .dropdown__placeholder {
                        padding: 18px 20px;
                        -webkit-touch-callout: none; 
                        -webkit-user-select: none; 
                        -khtml-user-select: none; 
                        -moz-user-select: none;
                        -ms-user-select: none; 
                        user-select: none; 
                    }
                    .dropdown__placeholder:after {
                        content: "";
                        border-bottom: 2px solid;
                        border-right: 2px solid;
                        display: inline-block;
                        height: 10px;
                        margin-left: 90px;
                        position: relative;
                        right: 0px;
                        top: -3px;
                        transform: rotate(45deg);
                        vertical-align: middle;
                        width: 10px;
                    }
                    .dropdown > div {
                        display: block;
                        width: 100%;
                        z-index: 99;
                        overflow: hidden;
                        border: 1px solid #aaa;
                    }
                    .dropdown .dropdown__opened {
                        height: auto;
                    }
                    .dropdown .dropdown__closed {
                        max-height: 50px;
                    }
                    .dropdown .dropdown__list {
                        display: block;
                        list-style-type: none;
                        padding: 0px;
                        border-radius: 3px;
                        box-shadow: none;
                        color: rgb(42, 48, 57);
                        width: inherit;
                        margin: 0;
                        overflow: hidden;
                        position: relative;
                        min-width: 210px;
                        transition: box-shadow 0.1s ease 0s, max-height 0.25s ease 0s;
                        background-color: rgb(255, 255, 255);
                    }
                    .dropdown__list li span {
                        color: inherit;
                        font-size: 14px;
                        line-height: 1;
                        padding: 18px 20px;
                        cursor: pointer;
                        border-top: 1px solid rgb(238, 242, 244);
                        display: block;
                    }
                `}</style>
            </div >
        </div>
    )
}



