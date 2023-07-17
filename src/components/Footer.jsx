const Footer = () => {
    const getDate = () => {
        const currentDate = new Date();
        return currentDate.getFullYear();
    }

    return (
        <p className="footer">Becode Tim Charlier {getDate()}</p>
    )
}

export default Footer