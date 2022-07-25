const Footer = () => {
    return (
        <footer className='bg-theme-orange text-center lg:text-left mt-auto max-w-screen'>
            <FooterContent />
        </footer>
    )
}

const FooterContent = () => {
    return (
        <div className='text-center px-4 py-2'>
            © 2022 This project is only for practicing!
        </div>
    )
}

export default Footer;