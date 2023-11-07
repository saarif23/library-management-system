

const Faq = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex gap-10  my-10">
                <div className="relative flex-1">
                    <img src="https://i.ibb.co/HYWzJDQ/faq.png" alt="iamge" />
                    <div className="p-10 bg-green-900 text-white absolute bottom-0 right-0 text-2xl ml-12 rounded-md">
                        <p>Contact Us For a Free Learning Consulting Evaluation</p>
                    </div>
                </div>


                <div className="flex-1">
                    <h3 className="text-5xl font-extrabold py-5">Frequently Asked Questions</h3>
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