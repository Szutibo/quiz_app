const Navbar = () => {
    return (
        <nav className='bg-theme-orange'>
            <div className='px-4 py-2'>
                <Logo />
            </div>
        </nav>
    )
}

const Logo = () => {
    return (
        <div>
            <img src='/redmenta-logo.png' alt='Logo' className='bg-redmenta-logo bg-contain bg-no-repeat h-10 w-10 block' />
        </div>
    )
}

export default Navbar;