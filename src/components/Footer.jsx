const Footer = () => {
    const getDate = () => {
        const currentDate = new Date();
        return currentDate.getFullYear();
    }

    return (
        <footer className="footer">
            <p className="footerText">Becode Tim Charlier {getDate()}</p>
        </footer>
    )
}

export default Footer