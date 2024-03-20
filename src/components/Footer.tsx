const Footer = () => {
    return (
        <div className="bg-blue-500 py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <span className="italic text-3xl text-white font-bold tracking-tight font-serif">
                    RayOrder.com
                </span>
                <span className="text-white font-bold tracking-tight flex gap-4">
                    <span className="font-mono">Privacy Policy</span>
                    <span className="font-mono">Terms of Service</span>
                </span>

            </div>
        </div>
    );
};

export default Footer;