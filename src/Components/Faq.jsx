import faqimage from '../assets/faq.png'

const Faq = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div

                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="flex max-lg:flex-col lg:flex-row gap-10  my-10 max-md:px-5">
                <div className="relative flex-1">
                    <img src={faqimage} alt="iamge" />
                    <div className="p-10 bg-[#176B87] text-white absolute bottom-0 right-0 text-2xl ml-12 rounded-md">
                        <p>Contact Us For a Free Learning Consulting Evaluation</p>
                    </div>
                </div>


                <div
                    data-aos="fade-left"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-sine"

                    className="flex-1">
                    <h3 className="text-5xl text-[#176B87] font-extrabold py-5 max-md:text-center">Frequently Asked Questions</h3>
                    <p>Architect client-centered total linkage for intuitive benefits. Dynamically restore convergence before real-time restore.</p>
                    <div className="collapse collapse-plus rounded border mt-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Can I borrow e-books from the library?
                        </div>
                        <div className="collapse-content">
                            <p>Absolutely! My libraries offer e-books that you can borrow for free. You can access a vast digital collection of books and read them on your e-reader, tablet, smartphone, or computer, all from the comfort of your home. It is a convenient and cost-effective way to enjoy a wide range of literature. So, you can definitely borrow e-books from your local library and dive into a world of reading pleasure.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus rounded border mt-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Can I donate books to the library?
                        </div>
                        <div className="collapse-content">
                            <p>Yes  of Course .</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus rounded border mt-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Are there late fees for overdue books?
                        </div>
                        <div className="collapse-content">
                            <p>Libraries typically charge late fees for overdue books, but the policies can vary. It  is essential to return or renew borrowed materials on time to avoid fines.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus rounded border mt-5">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            How can I contact a librarian for research assistance?
                        </div>
                        <div className="collapse-content">
                            <p>You can approach the librarys front desk or use their contact information to request assistance from a librarian for research, reference questions, and book recommendations..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;