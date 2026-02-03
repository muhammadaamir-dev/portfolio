import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
    Mail,
    MessageSquare,
    CheckCircle,
    CircleCheck,
    X,
    Send,
    User,
    FileText,
    Loader2,
} from "lucide-react";

const ContactSection = () => {
    const [open, setOpen] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.email.trim()) e.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Email is invalid";
        if (!form.subject.trim()) e.subject = "Subject is required";
        if (!form.message.trim()) e.message = "Message is required";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            console.log("Validation failed");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // ⚠️ YAHAN APNI DETAILS DALO ⚠️
            const SERVICE_ID = "service_hxj0pd4";     // EmailJS Service ID
            const TEMPLATE_ID = "template_bdlxfeg";   // EmailJS Template ID
            const PUBLIC_KEY = "HVxqO7Nb3ufGTgc06";     // EmailJS Public Key

            const templateParams = {
                 name: form.name,
                email: form.email,
                subject: form.subject,
                message: form.message,
                to_name: "Muhammad Aamir", // Tumhara naam
            };

            // Email send karo
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );

            // Console mein data print karo
            console.log("=== Email Sent Successfully ===");
            console.log("Name:", form.name);
            console.log("Email:", form.email);
            console.log("Subject:", form.subject);
            console.log("Message:", form.message);
            console.log("==============================");

            // Success status set karo
            setSubmitStatus("success");

            // Form reset karo
            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            // 2 seconds baad modal close karo
            setTimeout(() => {
                setOpen(false);
                setSubmitStatus(null);
            }, 2000);

        } catch (error) {
            console.error("Email send error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* ================= OLD UI (UNCHANGED) ================= */}
            <section id="contact" className="bg-gray-50 p-8 pt-32">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-900 mb-3">
                            Let's Build Something Together
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Ready to ship production-ready systems that scale?
                        </p>
                    </div>

                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                        Get in Touch
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Email Me */}
                        <div className="bg-white group border-2 border-sky-200 hover:border-sky-500 rounded-lg shadow-md p-8 flex flex-col items-center justify-center h-48 hover:shadow-lg transition-shadow">
                            <div className="bg-sky-100 p-4 rounded-xl mb-4 group-hover:bg-sky-500">
                                <Mail className="w-8 h-8 text-sky-600 group-hover:text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Email Me
                            </h3>
                            <p className="text-sm text-gray-600 text-center">
                                muhammadaamir.mcs@gmail.com
                            </p>
                        </div>

                        {/* Send a Message */}
                        <div
                            onClick={() => setOpen(true)}
                            className="cursor-pointer bg-white group border-2 border-sky-200 hover:border-sky-500 rounded-lg shadow-md p-8 flex flex-col items-center justify-center h-48 hover:shadow-lg transition-shadow"
                        >
                            <div className="bg-sky-100 p-4 rounded-xl mb-4 group-hover:bg-sky-500">
                                <MessageSquare className="w-8 h-8 text-sky-600 group-hover:text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Send a Message
                            </h3>
                            <p className="text-sm text-gray-600 text-center">
                                Fill out the form below for project inquiries or questions.
                            </p>
                        </div>
                    </div>

                    <div className="bg-blue-50 border flex justify-center items-center border-blue-200 rounded-lg p-4 mb-8">
                        <p className="text-lg text-gray-700">
                            <span className="font-semibold text-sky-500">Quick Response:</span>{" "}
                            I typically respond within 24 hours. For urgent matters, please send
                            an email directly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <CheckCircle className="text-sky-500 mr-2" />
                                What We Can Do Together
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>• Discuss your project or MVP</li>
                                <li>• Technical trade-offs</li>
                                <li>• Scalable deployments</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <CircleCheck className="text-sky-500 mr-2" />
                                Availability
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>• Remote-first</li>
                                <li>• Immediate availability</li>
                                <li>• Flexible time zones</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= MODAL ================= */}
            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 md:p-6">
                    <div className="bg-white w-full max-w-2xl md:max-w-xl rounded-xl shadow-lg overflow-y-auto max-h-[90vh] relative">
                        {/* Close Button */}
                        <button
                            onClick={() => {
                                setOpen(false);
                                setErrors({});
                                setSubmitStatus(null);
                            }}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                            disabled={isSubmitting}
                        >
                            <X size={20} />
                        </button>

                        {/* Header */}
                        <div className="flex items-start gap-3 mb-4 p-6">
                            <div className="bg-sky-100 p-3 rounded-xl flex-shrink-0">
                                <MessageSquare className="text-blue-500" size={22} />
                            </div>
                            <div>
                                <h2 className="text-lg md:text-xl font-semibold">Get in Touch</h2>
                                <p className="text-sm md:text-base text-gray-500 mt-1">
                                    I'll get back to you within 24 hours.
                                </p>
                            </div>
                        </div>

                        <hr className="border-gray-300 mb-6" />

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5 px-6 pb-6">
                            {/* Name */}
                            <div>
                                <label className="text-sm font-medium">Your full name</label>
                                <div className="relative mt-2">
                                    <User className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        disabled={isSubmitting}
                                        className={`w-full pl-10 pr-3 py-2 rounded-lg border ${
                                            errors.name ? "border-red-500" : "border-gray-200"
                                        } focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-200 disabled:bg-gray-50 disabled:cursor-not-allowed`}
                                    />
                                </div>
                                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-sm font-medium">Email</label>
                                <div className="relative mt-2">
                                    <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        disabled={isSubmitting}
                                        className={`w-full pl-10 pr-3 py-2 rounded-lg border ${
                                            errors.email ? "border-red-500" : "border-gray-200"
                                        } focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-200 disabled:bg-gray-50 disabled:cursor-not-allowed`}
                                    />
                                </div>
                                {errors.email ? (
                                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                                ) : (
                                    <p className="text-xs text-gray-500 mt-1">
                                        We respect your privacy and won't share your information.
                                    </p>
                                )}
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="text-sm font-medium">Subject</label>
                                <div className="relative mt-2">
                                    <FileText className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        placeholder="What's this about?"
                                        disabled={isSubmitting}
                                        className={`w-full pl-10 pr-3 py-2 rounded-lg border ${
                                            errors.subject ? "border-red-500" : "border-gray-200"
                                        } focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-200 disabled:bg-gray-50 disabled:cursor-not-allowed`}
                                    />
                                </div>
                                {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-sm font-medium">Message</label>
                                <div className="relative mt-2">
                                    <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <textarea
                                        rows="4"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project or opportunity..."
                                        disabled={isSubmitting}
                                        className={`w-full pl-10 pr-3 py-2 rounded-lg border ${
                                            errors.message ? "border-red-500" : "border-gray-200"
                                        } focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-200 resize-none disabled:bg-gray-50 disabled:cursor-not-allowed`}
                                    ></textarea>
                                </div>
                                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                            </div>

                            {/* Success/Error Message */}
                            {submitStatus === "success" && (
                                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5" />
                                    <span className="text-sm font-medium">Message sent successfully! 🎉</span>
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center gap-2">
                                    <X className="w-5 h-5" />
                                    <span className="text-sm font-medium">Failed to send. Please try again.</span>
                                </div>
                            )}

                            {/* Buttons */}
                            <div className="flex justify-end gap-3 mt-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setOpen(false);
                                        setErrors({});
                                        setSubmitStatus(null);
                                    }}
                                    disabled={isSubmitting}
                                    className="px-10 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactSection;
