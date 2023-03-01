import logo from "../src/assets/images/logo.png"
import styled from 'styled-components';
export default function Top() {
    return (
        <div className="topIcons">
            <img src={logo}></img>
            <h1> ZapRecall</h1>
        </div>
    )
}