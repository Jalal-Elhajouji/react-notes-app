import '../index.css';

const Header = ({ handleDarkMode }) => {
    return (
        <div className='container'>
            <header className='header'>
                <h2 className='heading'>My Notes</h2>
                <button
                    className='modeSwitch'
                    onClick={() =>
                        handleDarkMode(
                            (previousDarkMode) => !previousDarkMode
                        )
                    }>
                    Switch Mode
                </button>
            </header>
        </div>
    );
}

export default Header;
