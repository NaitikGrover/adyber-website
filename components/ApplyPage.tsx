import React, { useEffect, useState } from 'react';
import { Send, Loader2, CheckCircle2, ChevronDown, Plus, X, Upload } from 'lucide-react';
import { Button } from './Button';

const ApplyPage: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [tagInput, setTagInput] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        address: '',
        role: '',
        otherRole: '',
        experience: '',
        resumeLink: '',
        portfolioLink: '',
        tags: [] as string[],
        q1: '', // Why work with us
        q2: '', // Proud project
        q3: '', // Difference
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const roles = [
        "Social Media Manager",
        "Graphic Designer",
        "Video Editor",
        "Copywriter",
        "Ads Specialist",
        "Web Designer",
        "Other"
    ];

    const experienceLevels = [
        "Fresher / Entry Level",
        "1-2 Years",
        "3-5 Years",
        "5+ Years",
        "Expert / Lead"
    ];

    const handleAddTag = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const tag = tagInput.trim();
            if (tag && !formData.tags.includes(tag)) {
                setFormData({ ...formData, tags: [...formData.tags, tag] });
                setTagInput('');
            }
        }
    };

    const removeTag = (indexToRemove: number) => {
        setFormData({
            ...formData,
            tags: formData.tags.filter((_, index) => index !== indexToRemove)
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        const submissionData = {
            ...formData,
            tags: formData.tags.join(', '),
            _subject: `New Job Application: ${formData.name} - ${formData.role === 'Other' ? formData.otherRole : formData.role}`,
            _template: 'table',
            _captcha: 'false'
        };

        try {
            const response = await fetch("https://formsubmit.co/ajax/team@adyber.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(submissionData),
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="pt-32 pb-20 px-4 flex flex-col items-center justify-center min-h-[70vh] text-center">
                <div className="bg-brand-lime/10 p-6 rounded-lg mb-6">
                    <CheckCircle2 size={48} className="text-brand-lime" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Application Received!</h1>
                <p className="text-gray-400 max-w-md mx-auto mb-8">
                    Thanks for reaching out! Our team will review your application carefully and get back to you soon.
                </p>
                <Button onClick={() => window.location.href = '/'}>Back to Home</Button>
            </div>
        );
    }

    const inputClasses = "w-full bg-zinc-900 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-brand-lime/50 transition-all placeholder:text-gray-600";
    const labelClasses = "text-sm font-medium text-gray-400 block mb-2";

    return (
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-gray-300 min-h-screen">
            <div className="text-center mb-12 animate-fadeIn">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">Work With Us</h1>
                <p className="text-gray-400 text-lg">Join Adyber and help us build the next generation of premium brands.</p>
            </div>

            <div className="bg-zinc-900/20 border border-white/5 rounded-2xl p-6 sm:p-10 backdrop-blur-sm shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Details */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                            <span className="text-brand-lime text-xl">01.</span> Personal Details
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className={labelClasses}>Full Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. Naitik Grover"
                                    className={inputClasses}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className={labelClasses}>Email Address</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="naitik@adyber.com"
                                    className={inputClasses}
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className={labelClasses}>Phone Number</label>
                                <input
                                    required
                                    type="tel"
                                    placeholder="+91 00000 00000"
                                    className={inputClasses}
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className={labelClasses}>Website (Optional)</label>
                                <input
                                    type="url"
                                    placeholder="https://yourportfolio.com"
                                    className={inputClasses}
                                    value={formData.website}
                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label className={labelClasses}>Address</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="City, State, Country"
                                    className={inputClasses}
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Professional Profile */}
                    <div className="space-y-6 pt-4">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                            <span className="text-brand-lime text-xl">02.</span> Professional Profile
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className={labelClasses}>Desired Role</label>
                                <div className="relative">
                                    <select
                                        required
                                        className={`${inputClasses} appearance-none cursor-pointer`}
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    >
                                        <option value="" disabled>Select a role</option>
                                        {roles.map(role => <option key={role} value={role}>{role}</option>)}
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className={labelClasses}>Experience Level</label>
                                <div className="relative">
                                    <select
                                        required
                                        className={`${inputClasses} appearance-none cursor-pointer`}
                                        value={formData.experience}
                                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                    >
                                        <option value="" disabled>Select experience</option>
                                        {experienceLevels.map(exp => <option key={exp} value={exp}>{exp}</option>)}
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                                </div>
                            </div>

                            {formData.role === 'Other' && (
                                <div className="sm:col-span-2 animate-fadeIn">
                                    <label className={labelClasses}>Specific Role Title</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Enter your role..."
                                        className={inputClasses}
                                        value={formData.otherRole}
                                        onChange={(e) => setFormData({ ...formData, otherRole: e.target.value })}
                                    />
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className={labelClasses}>Resume Link</label>
                                <input
                                    required
                                    type="url"
                                    placeholder="Google Drive/Dropbox Link"
                                    className={inputClasses}
                                    value={formData.resumeLink}
                                    onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className={labelClasses}>Portfolio Link</label>
                                <input
                                    required
                                    type="url"
                                    placeholder="Behance/Dribbble/Work Link"
                                    className={inputClasses}
                                    value={formData.portfolioLink}
                                    onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                                />
                            </div>

                            <div className="sm:col-span-2 space-y-2">
                                <label className={labelClasses}>Skills / Tags (Press Enter)</label>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {formData.tags.map((tag, index) => (
                                        <span key={index} className="bg-zinc-800 text-gray-300 px-3 py-1 rounded text-xs flex items-center gap-1.5 transition-colors">
                                            {tag}
                                            <button type="button" onClick={() => removeTag(index)} className="hover:text-brand-lime">
                                                <X size={12} />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                                <input
                                    type="text"
                                    placeholder="Adobe Premiere, Figma, Copywriting..."
                                    className={inputClasses}
                                    value={tagInput}
                                    onKeyDown={handleAddTag}
                                    onChange={(e) => setTagInput(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Quick Questions */}
                    <div className="space-y-6 pt-4">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                            <span className="text-brand-lime text-xl">03.</span> Quick Questions
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <label className={labelClasses}>Why do you want to work with us?</label>
                                <textarea
                                    required
                                    rows={3}
                                    className={`${inputClasses} resize-none`}
                                    value={formData.q1}
                                    onChange={(e) => setFormData({ ...formData, q1: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className={labelClasses}>Describe a project you’re proud of.</label>
                                <textarea
                                    required
                                    rows={3}
                                    className={`${inputClasses} resize-none`}
                                    value={formData.q2}
                                    onChange={(e) => setFormData({ ...formData, q2: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className={labelClasses}>What makes you different from others?</label>
                                <textarea
                                    required
                                    rows={3}
                                    className={`${inputClasses} resize-none`}
                                    value={formData.q3}
                                    onChange={(e) => setFormData({ ...formData, q3: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <Button
                            type="submit"
                            variant="glow"
                            fullWidth
                            disabled={status === 'loading'}
                            className="py-4 font-bold rounded-lg"
                        >
                            {status === 'loading' ? (
                                <span className="flex items-center gap-2">
                                    <Loader2 size={18} className="animate-spin" />
                                    Submitting...
                                </span>
                            ) : (
                                'Submit Application'
                            )}
                        </Button>

                        {status === 'error' && (
                            <p className="text-red-500 text-sm text-center mt-4">
                                Something went wrong. Please try again or email team@adyber.com
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplyPage;
