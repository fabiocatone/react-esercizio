import AppLogo from "./AppLogo"

export default function AppMain() {
    return (
        <main> 
<div className="SpaceLogo">
    <AppLogo size = {75}/>
    <h1 className="TitleLogo">
        Welcome to the React Community
    </h1>
    <a className="btn">Get Started</a>
</div>
        </main>
    )
}