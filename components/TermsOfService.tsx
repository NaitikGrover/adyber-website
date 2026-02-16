import React, { useEffect } from 'react';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-300 min-h-screen">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 tracking-tight">Terms of Service</h1>
      <div className="space-y-8">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">1. Agreement to Terms</h2>
          <p className="leading-relaxed">
            By accessing our website at Adyber.com, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">2. Use License</h2>
          <p className="leading-relaxed">
            Permission is granted to temporarily download one copy of the materials (information or software) on Adyber's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>Attempt to decompile or reverse engineer any software contained on Adyber's website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">3. Disclaimer</h2>
          <p className="leading-relaxed">
            The materials on Adyber's website are provided on an 'as is' basis. Adyber makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">4. Limitations</h2>
          <p className="leading-relaxed">
            In no event shall Adyber or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Adyber's website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;