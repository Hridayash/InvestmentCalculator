import logo from "../assets/investment-calculator-logo.png"

export default function Header(){
    return(
        <header id="header">
            <img src={logo} />
            <h1>Investment App</h1>
        </header>
    );
}