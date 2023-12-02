import '../index.css';

const Header = () => {
    return (
        <div className='container'>
            <header className='header'>
                <h2 className='heading'>My Notes</h2>
                <button className='modeSwitch'>Switch Mode</button>
            </header>
        </div>
    );
}

export default Header;
