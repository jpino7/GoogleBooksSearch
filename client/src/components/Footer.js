import React from "react";


function Footer(){
    const FooterStyle = {
        fontFamily: "Josefin Sans, sans-serif",
        textAlign: "center",
        backgroundColor:"orange",
        color:"black"
    }

    return(
        <footer className="footer" style={FooterStyle}>
            <p>© 2020 Copyright • Joanna Pino</p>
        </footer>
    )
}

export default Footer;