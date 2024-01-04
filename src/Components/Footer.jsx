const Footer = () => {
    return (
      <div className="bg-[#86B6F6]">
          <footer className="grid max-w-6xl mx-auto max-md:grid-cols-1 max-lg:grid-cols-3 max-lg:gap-10 lg:grid-cols-4 gap-5 py-10 px-20 text-black">
            <div className="max-lg:col-span-3 max-md:col-span-1">
                <img className="w-36 max-lg:mx-auto" src="https://i.ibb.co/h84CxzQ/Capture-removebg-preview.png" alt="sunshine Wedding" />
                <p className="max-lg:text-center">Knowledge Cafe <br />Providing free  knowledge since 2010</p>
            </div>
            <div className="max-md:text-center">
                <header className="footer-title">Services</header>
                <p className="link link-hover">Browse All FAQs</p>
                <p className="link link-hover">Adult Education & Certification</p>
                <p className="link link-hover">Computer & Technology Books</p>
                <p className="link link-hover">eCard Registration</p>
                <p className="link link-hover">Log In to Your Account</p>
            </div>
            <div className="max-md:text-center">
                <header className="footer-title">Resources For...</header>
                <p className="link link-hover">English Language Learners</p>
                <p className="link link-hover">Entrepreneurs</p>
                <p className="link link-hover">Job Seekers</p>
                <p className="link link-hover">Kids</p>
                <p className="link link-hover">Teens</p>
            </div>
            <div className="max-md:text-center">
                <header className="footer-title">Legal</header>
                <p className="link link-hover">Administration</p>
                <p className="link link-hover">Terms & Conditions</p>
                <p className="link link-hover">Privacy policy</p>
                <p className="link link-hover">Cookie policy</p>
            </div>
        </footer>
      </div>
    );
};

export default Footer;