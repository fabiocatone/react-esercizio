import AppLogo from "./AppLogo"
export default function AppHeader ({menu}) {

    return(
        <header>
             <AppLogo/> <p className="pLogo"> v 19.2</p>
            <nav>
                {menu.map((item) =>
( <a key={item.id}> {item.text} </a>)
                )}
               
            </nav>

        </header>

    )
}