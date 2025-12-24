import React, { useState } from 'react';
import {
    Briefcase,
    MapPin,
    Clock,
    Users,
    TrendingUp,
    Heart,
    GraduationCap,
    Shield,
    DollarSign,
    Award,
    ChevronDown,
    ChevronUp,
    Upload,
    Mail,
    Phone,
    Newspaper,
} from 'lucide-react';

interface Job {
    id: number;
    title: string;
    location: string;
    department: string;
    type: string;
    responsibilities: string[];
    qualifications: string[];
}

const Careers: React.FC = () => {
    const [expandedJob, setExpandedJob] = useState<number | null>(null);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [applicationData, setApplicationData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        coverLetter: '',
    });

    const jobListings: Job[] = [
        {
            id: 1,
            title: 'Senior Geologist',
            location: 'Monrovia, Liberia',
            department: 'Exploration',
            type: 'Full-Time',
            responsibilities: [
                'Lead geological surveys and mapping projects',
                'Analyze core samples and geological data',
                'Prepare technical reports and resource estimates',
                'Supervise junior geologists and field teams',
            ],
            qualifications: [
                'BSc/MSc in Geology or related field',
                '5+ years experience in mineral exploration',
                'Strong knowledge of West African geology',
                'Proficiency in geological software (e.g., Leapfrog, ArcGIS)',
            ],
        },
        {
            id: 2,
            title: 'Environmental Officer',
            location: 'Monrovia, Liberia',
            department: 'Environmental Management',
            type: 'Full-Time',
            responsibilities: [
                'Conduct Environmental Impact Assessments (EIA)',
                'Ensure compliance with EPA regulations',
                'Monitor environmental performance metrics',
                'Develop and implement environmental management plans',
            ],
            qualifications: [
                'BSc in Environmental Science or related field',
                '3+ years experience in mining or industrial sector',
                'Knowledge of Liberian environmental regulations',
                'Strong report writing and communication skills',
            ],
        },
        {
            id: 3,
            title: 'Mining Engineer',
            location: 'Project Sites, Liberia',
            department: 'Mining Operations',
            type: 'Full-Time',
            responsibilities: [
                'Design and optimize mine plans',
                'Supervise mining operations and equipment',
                'Ensure safety and productivity targets are met',
                'Coordinate with geology and processing teams',
            ],
            qualifications: [
                'BSc/MSc in Mining Engineering',
                '4+ years experience in open-pit or underground mining',
                'Strong understanding of mine planning software',
                'Excellent leadership and problem-solving skills',
            ],
        },
        {
            id: 4,
            title: 'Community Relations Officer',
            location: 'Various Sites, Liberia',
            department: 'Community Development',
            type: 'Full-Time',
            responsibilities: [
                'Manage stakeholder engagement programs',
                'Coordinate community development initiatives',
                'Address community concerns and grievances',
                'Implement CSR and CDA programs',
            ],
            qualifications: [
                'BSc in Social Sciences, Development Studies, or related field',
                '3+ years experience in community relations',
                'Fluency in local languages preferred',
                'Strong interpersonal and negotiation skills',
            ],
        },
    ];

    const benefits = [
        { icon: DollarSign, title: 'Competitive Salary', description: 'Market-leading compensation packages' },
        { icon: Heart, title: 'Health Insurance', description: 'Comprehensive medical coverage' },
        { icon: GraduationCap, title: 'Training & Development', description: 'Continuous learning opportunities' },
        { icon: Shield, title: 'Safety First', description: 'Industry-leading safety standards' },
        { icon: Award, title: 'Performance Bonuses', description: 'Recognition and rewards' },
        { icon: TrendingUp, title: 'Career Growth', description: 'Clear advancement pathways' },
    ];

    const faqs = [
        {
            question: 'What is the recruitment process?',
            answer:
                'Our recruitment process typically includes: (1) Application review, (2) Initial phone screening, (3) Technical interview, (4) In-person interview with the hiring manager, (5) Reference checks, and (6) Job offer. The entire process usually takes 2-4 weeks.',
        },
        {
            question: 'Do you offer internships or graduate programs?',
            answer:
                'Yes, we offer structured internship programs for university students and graduate trainee positions for recent graduates. These programs provide hands-on experience and mentorship opportunities in geology, mining engineering, and environmental management.',
        },
        {
            question: 'What are the visa and work eligibility requirements?',
            answer:
                'Foreign nationals must have valid work authorization in Liberia. We provide sponsorship support for highly qualified candidates. All applicants must have the legal right to work in Liberia by the start date.',
        },
        {
            question: 'How long does it take to hear back after applying?',
            answer:
                'We aim to review all applications within 2 weeks of the closing date. Shortlisted candidates will be contacted for the next stage. If you do not hear from us within 4 weeks, your application was not successful for this particular role.',
        },
    ];

    const handleApplicationSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Application submitted:', applicationData);
        // Application logic would be implemented here
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-[#2d6130] to-[#1a3d1c] text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <div className="inline-flex items-center gap-2 py-2 px-4 mb-6 bg-white/10 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest rounded-sm">
                        <Briefcase size={14} className="text-amber-400" />
                        Join Our Team
                    </div>
                    <h1 className="text-4xl md:text-6xl font-light mb-6">
                        Build Your <strong className="font-extrabold text-amber-400">Career</strong> With Us
                    </h1>
                    <p className="text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed">
                        Join a team committed to responsible mining, environmental stewardship, and community development
                    </p>
                </div>
            </div>

            {/* Company Culture */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-3">
                            Our Culture
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                            Why Work at <strong className="font-bold">GeoMining?</strong>
                        </h3>
                        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            We believe in creating an environment where talent thrives, innovation flourishes, and every team member contributes to sustainable development
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 p-6 rounded-sm border-l-4 border-[#2d6130] hover:shadow-lg transition-all"
                            >
                                <benefit.icon className="text-[#2d6130] mb-4" size={32} />
                                <h4 className="text-lg font-bold text-slate-900 mb-2">
                                    {benefit.title}
                                </h4>
                                <p className="text-slate-600 text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Values */}
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-12 rounded-sm text-white">
                        <h4 className="text-2xl font-bold mb-6">Our Core Values</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {['Integrity', 'Excellence', 'Sustainability', 'Community'].map(
                                (value, i) => (
                                    <div key={i} className="text-center">
                                        <div className="w-2 h-2 bg-amber-400 rounded-full mx-auto mb-3"></div>
                                        <p className="font-bold text-lg">{value}</p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Listings */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-3">
                            Current Openings
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                            Find Your <strong className="font-bold">Perfect Role</strong>
                        </h3>
                    </div>

                    <div className="space-y-4">
                        {jobListings.map((job) => (
                            <div
                                key={job.id}
                                className="bg-white rounded-sm shadow-md overflow-hidden border-l-4 border-[#2d6130]"
                            >
                                <div
                                    className="p-6 cursor-pointer hover:bg-slate-50 transition-colors"
                                    onClick={() =>
                                        setExpandedJob(expandedJob === job.id ? null : job.id)
                                    }
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-slate-900 mb-3">
                                                {job.title}
                                            </h4>
                                            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                                                <span className="flex items-center gap-1">
                                                    <MapPin size={14} className="text-amber-500" />
                                                    {job.location}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Users size={14} className="text-amber-500" />
                                                    {job.department}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock size={14} className="text-amber-500" />
                                                    {job.type}
                                                </span>
                                            </div>
                                        </div>
                                        <button className="text-[#2d6130] p-2">
                                            {expandedJob === job.id ? (
                                                <ChevronUp size={24} />
                                            ) : (
                                                <ChevronDown size={24} />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {expandedJob === job.id && (
                                    <div className="px-6 pb-6 border-t border-slate-100 pt-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                                            <div>
                                                <h5 className="font-bold text-slate-900 mb-3 uppercase text-sm tracking-wider">
                                                    Key Responsibilities
                                                </h5>
                                                <ul className="space-y-2">
                                                    {job.responsibilities.map((resp, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-2 text-slate-600 text-sm"
                                                        >
                                                            <span className="text-amber-500 mt-1">▪</span>
                                                            {resp}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-slate-900 mb-3 uppercase text-sm tracking-wider">
                                                    Required Qualifications
                                                </h5>
                                                <ul className="space-y-2">
                                                    {job.qualifications.map((qual, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-2 text-slate-600 text-sm"
                                                        >
                                                            <span className="text-amber-500 mt-1">▪</span>
                                                            {qual}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => {
                                                setApplicationData({ ...applicationData, position: job.title });
                                                document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className="bg-[#2d6130] text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-[#1a3d1c] transition-all"
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Portal */}
            <section id="application" className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-3">
                            Application Portal
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                            Submit Your <strong className="font-bold">Application</strong>
                        </h3>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Fill out the form below to apply for a position. We'll review your application and contact you if your profile matches our requirements.
                        </p>
                    </div>

                    <form
                        onSubmit={handleApplicationSubmit}
                        className="bg-slate-50 p-8 md:p-12 rounded-sm shadow-lg border-t-4 border-[#2d6130]"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    value={applicationData.name}
                                    onChange={(e) =>
                                        setApplicationData({ ...applicationData, name: e.target.value })
                                    }
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-sm focus:border-[#2d6130] focus:outline-none transition-colors"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    value={applicationData.email}
                                    onChange={(e) =>
                                        setApplicationData({ ...applicationData, email: e.target.value })
                                    }
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-sm focus:border-[#2d6130] focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    value={applicationData.phone}
                                    onChange={(e) =>
                                        setApplicationData({ ...applicationData, phone: e.target.value })
                                    }
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-sm focus:border-[#2d6130] focus:outline-none transition-colors"
                                    placeholder="+231 XXX-XXXX"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                    Position Applied For *
                                </label>
                                <select
                                    value={applicationData.position}
                                    onChange={(e) =>
                                        setApplicationData({ ...applicationData, position: e.target.value })
                                    }
                                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-sm focus:border-[#2d6130] focus:outline-none transition-colors"
                                    required
                                >
                                    <option value="">Select a position</option>
                                    {jobListings.map((job) => (
                                        <option key={job.id} value={job.title}>
                                            {job.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                Resume / CV *
                            </label>
                            <div className="border-2 border-dashed border-slate-300 rounded-sm p-8 text-center hover:border-[#2d6130] transition-colors cursor-pointer">
                                <Upload className="mx-auto text-slate-400 mb-3" size={32} />
                                <p className="text-slate-600 text-sm mb-1">
                                    Click to upload or drag and drop
                                </p>
                                <p className="text-slate-400 text-xs">PDF or DOC (max 5MB)</p>
                                <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                Cover Letter
                            </label>
                            <textarea
                                value={applicationData.coverLetter}
                                onChange={(e) =>
                                    setApplicationData({
                                        ...applicationData,
                                        coverLetter: e.target.value,
                                    })
                                }
                                rows={6}
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-sm focus:border-[#2d6130] focus:outline-none transition-colors resize-none"
                                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#2d6130] text-white py-4 px-6 font-bold uppercase tracking-widest hover:bg-[#1a3d1c] transition-all transform hover:-translate-y-0.5 shadow-lg"
                        >
                            Submit Application
                        </button>
                    </form>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-3">
                            Frequently Asked Questions
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                            Got <strong className="font-bold">Questions?</strong>
                        </h3>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-sm shadow-md overflow-hidden"
                            >
                                <button
                                    onClick={() =>
                                        setExpandedFaq(expandedFaq === index ? null : index)
                                    }
                                    className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-bold text-slate-900 pr-4">
                                        {faq.question}
                                    </span>
                                    {expandedFaq === index ? (
                                        <ChevronUp className="text-[#2d6130] shrink-0" size={20} />
                                    ) : (
                                        <ChevronDown className="text-[#2d6130] shrink-0" size={20} />
                                    )}
                                </button>
                                {expandedFaq === index && (
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company News */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-3">
                            Latest News
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                            What's Happening at <strong className="font-bold">GeoMining</strong>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'New Exploration Project Launched',
                                date: 'December 2025',
                                description: 'GeoMining announces major exploration initiative in northern Liberia',
                            },
                            {
                                title: 'Community Development Award',
                                date: 'November 2025',
                                description: 'Recognized for outstanding CSR programs and local empowerment',
                            },
                            {
                                title: 'Graduate Trainee Program 2025',
                                date: 'October 2025',
                                description: 'Applications now open for our annual graduate development program',
                            },
                        ].map((news, i) => (
                            <div
                                key={i}
                                className="bg-slate-50 p-6 rounded-sm border-l-4 border-amber-500 hover:shadow-lg transition-all"
                            >
                                <Newspaper className="text-[#2d6130] mb-4" size={24} />
                                <p className="text-xs text-amber-600 font-bold uppercase tracking-wider mb-2">
                                    {news.date}
                                </p>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">
                                    {news.title}
                                </h4>
                                <p className="text-slate-600 text-sm">{news.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <h3 className="text-3xl font-light mb-6">
                        Have Questions About <strong className="font-bold text-amber-400">Recruitment?</strong>
                    </h3>
                    <p className="text-slate-300 mb-12 leading-relaxed">
                        Our HR team is here to assist you with any recruitment inquiries
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-slate-800 p-8 rounded-sm border-2 border-slate-700 hover:border-[#2d6130] transition-colors">
                            <Mail className="text-amber-400 mx-auto mb-4" size={32} />
                            <h4 className="font-bold mb-2">Email HR</h4>
                            <a
                                href="mailto:careers@geomining.com"
                                className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
                            >
                                careers@geomining.com
                            </a>
                        </div>

                        <div className="bg-slate-800 p-8 rounded-sm border-2 border-slate-700 hover:border-[#2d6130] transition-colors">
                            <Phone className="text-amber-400 mx-auto mb-4" size={32} />
                            <h4 className="font-bold mb-2">Call HR</h4>
                            <a
                                href="tel:+231XXXXXXXX"
                                className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
                            >
                                +231 XXX-XXXX
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
