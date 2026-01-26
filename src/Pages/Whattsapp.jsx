import { MessageCirclePlus } from "lucide-react";

const Whatsapp = () => {
    // ======== YOUR DETAILS ========
    const phone = "923094536330"; // apna number (92 ke sath)
    const message =  "Hi Aamir, I'd like to connect...";

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-50 group"
        >
            <div className="relative">
                {/* Online green dot */}
                <span
                    className="
            absolute -top-1.5 -right-1.5
            w-4 h-4
            bg-[#25D366]
            rounded-full
            border-2 border-white
            animate-pulse
          "
                />

                {/* WhatsApp Button */}
                <div
                    className="
            w-14 h-14 sm:w-16 sm:h-16
            rounded-full
            bg-[#25D366]
            flex items-center justify-center
            transition-all duration-300 ease-in-out
            hover:bg-[#1EBE5D]
            hover:scale-105
            animate-float
          "
                >
                    <MessageCirclePlus
                        size={26}
                        className="
              text-white
              transition-transform duration-300
              group-hover:rotate-[20deg]
            "
                    />
                </div>

                {/* Tooltip */}
                <span
                    className="
            pointer-events-none
            absolute left-full ml-3 bottom-1/2 translate-y-1/2
            whitespace-nowrap
            rounded-md
            border border-gray-700
            bg-white px-3 py-1
            text-xs font-semibold text-gray-700
            opacity-0
            transition-all duration-300
            group-hover:opacity-100
            group-hover:translate-x-1
          "
                >
                    Chat on WhatsApp
                </span>
            </div>

            {/* Floating animation */}
            <style>{`
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
      `}</style>
        </a>
    );
};

export default Whatsapp;
