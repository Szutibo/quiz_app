const Header = () => {
    return (
        <div className='mt-6 flex cursor-default'>
            <HeaderContent />
        </div>
    )
}

const HeaderContent = () => {
    return (
        <div className='mb-5'>
            <h1 className='font-bold mb-1'>Welcome to the exercise-app!</h1>
            <h3 className='font-semibold'>Feel free to test your knowledge</h3>
        </div>
    )
}

export default Header;