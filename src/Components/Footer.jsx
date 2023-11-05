const Footer = () => {
    return (
      <div className=" bg-slate-300">
          <footer className="grid max-w-6xl mx-auto max-md:grid-cols-1 max-lg:grid-cols-3 max-lg:gap-10 lg:grid-cols-4 gap-5 py-10 px-20 text-black">
            <div className="max-lg:col-span-3 max-md:col-span-1">
                <img className="w-36 max-lg:mx-auto" src="https://i.ibb.co/c16k3jm/l-OGO-removebg-preview.png" alt="sunshine Wedding" />
                <p className="max-lg:text-center">MAOXAL Technology & Electronics <br />Providing reliable business since 2019</p>
            </div>
            <div className="max-md:text-center">
                <header className="footer-title">Services</header>
                <p className="link link-hover">Marketing</p>
                <p className="link link-hover">Product Management</p>
                <p className="link link-hover">Branding</p>
                <p className="link link-hover">Advertisement</p>
            </div>
            <div className="max-md:text-center">
                <header className="footer-title">Company</header>
                <p className="link link-hover">About us</p>
                <p className="link link-hover">Contact</p>
                <p className="link link-hover">Business</p>
                <p className="link link-hover">Press kit</p>
            </div>
            <div className="max-md:text-center">
                <header className="footer-title">Legal</header>
                <p className="link link-hover">License</p>
                <p className="link link-hover">Terms & Conditions</p>
                <p className="link link-hover">Privacy policy</p>
                <p className="link link-hover">Cookie policy</p>
            </div>
        </footer>
      </div>
    );
};

export default Footer;