import './contact.css';
function Contact() {
    return (
        <>

            <div class="contacts">
                <div class="title">
                    <p>CONTACT</p>
                    <h1>Get In <span>Touch</span></h1>
                    <div class="line"></div>
                    <h4>
                        Crafting modern web experiences where creativity meets clean code.
                    </h4>
                </div>
                <div class="container">
                    <div class="inform">
                        <h2>Let's Talk</h2>
                        <p>
                            I'm available for work and
                            full Stack developer development opportunities.
                        </p>
                        <div class="info">
                            <h3> Dindigul, India</h3>
                            <h3>Kumarsaravana18853@gmail.com</h3>
                            <h3> +91 8610462722</h3>
                        </div>
                    </div>
                    <form action="">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <input type="text" placeholder="Subject" />
                        <textarea placeholder="Your Message"></textarea>
                        <button>Send Message </button>
                    </form>
                </div>
            </div>

        </>
    )
}
export default Contact