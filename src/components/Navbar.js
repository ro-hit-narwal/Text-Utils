export default function Navbar(props) {
    var lightMode = {
        height: "20px",
        width: "20px",
        borderRadius: "100%",
        borderWidth: "0px",
    }
    var darkMode = {
        height: "20px",
        width: "20px",
        borderRadius: "100%",
        borderWidth: "0px",
        backgroundColor:'black'
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark'} bg-${props.mode}`}>
                <div className={`container-fluid`}>
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li> */}
                        </ul>
                        <div className={`form-check form-switch `} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            {props.mode==='light' ? (
                                <button className={`ModeButton`} style={darkMode} onClick={props.switchMode}></button>
                            ) : (
                                <button className={`ModeButton`} style={lightMode} onClick={props.switchMode}></button>
                            )}
                            <div className={`container text-${props.mode === 'light' || '' ? 'dark' : 'light'}`}>Change Mode</div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

// Navbar.propTypes = {
//     title: PropTypes.string
// }
// // in case if we don't want to set values in App.js
// Navbar.defaultProps = {
//     title: 'WordTicker'
// }