import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from './Button';

interface NotFoundProps {
    onNavigate: (page: string) => void;
}

const NotFound: React.FC<NotFoundProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-48 pb-20 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 -right-20 w-[300px] h-[300px] bg-brand-lime/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

            <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
                <h1 className="text-[120px] sm:text-[200px] font-black leading-none tracking-tighter text-white opacity-10 select-none pointer-events-none">
                    404
                </h1>

                <div className="-mt-16 sm:-mt-24">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
                        Lost in the <span className="text-brand-lime italic">matrix?</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-md mx-auto leading-relaxed">
                        The page you are looking for has been moved, deleted, or never existed in the first place. Let's get you back on track.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            variant="primary"
                            className="px-8 h-12 flex items-center gap-2 group w-full sm:w-auto"
                            onClick={() => onNavigate('home')}
                        >
                            <Home size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                            Back to Home
                        </Button>

                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-6 py-3 text-sm font-medium"
                        >
                            <ArrowLeft size={16} />
                            Go Back
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative Brand Text */}
            <div className="absolute bottom-10 left-10 hidden lg:block">
                <span className="text-white/[0.02] text-8xl font-bold tracking-tighter select-none pointer-events-none">
                    ADYBER<span className="text-brand-lime/[0.05]">.</span>
                </span>
            </div>
        </div>
    );
};

export default NotFound;
