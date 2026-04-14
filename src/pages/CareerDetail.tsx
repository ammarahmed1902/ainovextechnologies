import { ChangeEvent, FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Briefcase, CheckCircle2, Clock, MapPin, Upload } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { jobs } from '../data/jobs';

type ApplicationFormState = {
  firstName: string;
  lastName: string;
  experience: string;
  expectedSalary: string;
  currentSalary: string;
  reasonForLeaving: string;
  resume: File | null;
  coverLetter: string;
  linkedInProfile: string;
  portfolio: string;
};

type FormErrors = Partial<Record<keyof ApplicationFormState, string>>;

const initialFormState: ApplicationFormState = {
  firstName: '',
  lastName: '',
  experience: '',
  expectedSalary: '',
  currentSalary: '',
  reasonForLeaving: '',
  resume: null,
  coverLetter: '',
  linkedInProfile: '',
  portfolio: ''
};

export default function CareerDetail() {
  const { id } = useParams();
  const jobId = Number(id);
  const job = jobs.find((entry) => entry.id === jobId);
  const applicationFormRef = useRef<HTMLElement | null>(null);
  const resumeInputRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState<ApplicationFormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const acceptedResumeTypes = useMemo(
    () => '.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    []
  );

  useEffect(() => {
    if (!showApplicationForm) {
      return;
    }

    applicationFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [showApplicationForm]);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  const scrollToApplicationForm = () => {
    setShowApplicationForm(true);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData((currentState) => ({
      ...currentState,
      [name]: value
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined
    }));

    setSubmissionMessage('');
  };

  const handleResumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] ?? null;

    setFormData((currentState) => ({
      ...currentState,
      resume: selectedFile
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      resume: undefined
    }));

    setSubmissionMessage('');
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      nextErrors.firstName = 'First name is required.';
    }

    if (!formData.lastName.trim()) {
      nextErrors.lastName = 'Last name is required.';
    }

    if (!formData.experience.trim()) {
      nextErrors.experience = 'Experience is required.';
    }

    if (!formData.expectedSalary.trim()) {
      nextErrors.expectedSalary = 'Expected salary is required.';
    }

    if (!formData.currentSalary.trim()) {
      nextErrors.currentSalary = 'Current salary is required.';
    }

    if (!formData.reasonForLeaving.trim()) {
      nextErrors.reasonForLeaving = 'Please share your reason for leaving.';
    }

    if (!formData.resume) {
      nextErrors.resume = 'Please upload your resume.';
    }

    if (!formData.coverLetter.trim()) {
      nextErrors.coverLetter = 'Cover letter is required.';
    }

    if (formData.linkedInProfile.trim()) {
      try {
        const linkedInUrl = new URL(formData.linkedInProfile);
        if (!['http:', 'https:'].includes(linkedInUrl.protocol)) {
          nextErrors.linkedInProfile = 'LinkedIn profile must be a valid URL.';
        }
      } catch {
        nextErrors.linkedInProfile = 'LinkedIn profile must be a valid URL.';
      }
    }

    if (formData.portfolio.trim()) {
      try {
        const portfolioUrl = new URL(formData.portfolio);
        if (!['http:', 'https:'].includes(portfolioUrl.protocol)) {
          nextErrors.portfolio = 'Portfolio must be a valid URL.';
        }
      } catch {
        nextErrors.portfolio = 'Portfolio must be a valid URL.';
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      setSubmissionMessage('Please fix the highlighted fields and try again.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      jobId: job.id,
      jobTitle: job.title,
      ...formData,
      resume: formData.resume
        ? {
            name: formData.resume.name,
            size: formData.resume.size,
            type: formData.resume.type
          }
        : null,
      submittedAt: new Date().toISOString()
    };

    try {
      console.log('Job application submitted', payload);

      await new Promise((resolve) => {
        window.setTimeout(resolve, 600);
      });

      setSubmissionMessage('Application submitted successfully. Our hiring team will be in touch.');
      setFormData(initialFormState);
      setErrors({});

      if (resumeInputRef.current) {
        resumeInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Unable to submit application', error);
      setSubmissionMessage('Something went wrong while submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderError = (fieldName: keyof ApplicationFormState, errorId: string) =>
    errors[fieldName] ? (
      <p id={errorId} className="mt-2 text-sm text-red-600" role="alert">
        {errors[fieldName]}
      </p>
    ) : null;

  return (
    <article className="pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-accent transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to open positions
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-12 mb-8"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-widest mb-5">
            {job.department}
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-950 mb-6">
            {job.title}
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">{job.overview}</p>
          <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {job.type}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {job.location}
            </span>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> {job.department}
            </span>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-navy-950 mb-5">Responsibilities</h2>
            <ul className="space-y-4">
              {job.responsibilities.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-navy-950 mb-5">Requirements</h2>
            <ul className="space-y-4">
              {job.requirements.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-navy-950 rounded-[2rem] p-8 md:p-10 text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
            Ready to apply?
          </h3>
          <p className="text-slate-300 mb-7">
            Start your application now and share your experience, resume, and supporting links with our hiring team.
          </p>
          <button
            type="button"
            onClick={scrollToApplicationForm}
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-navy-950 px-8 py-4 rounded-2xl font-bold transition-all"
          >
            Apply for this role
          </button>
        </motion.div>

        {showApplicationForm ? (
          <motion.section
            ref={applicationFormRef}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-10"
          >
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent mb-3">
                Application Form
              </p>
              <h2 className="text-3xl font-display font-bold text-navy-950 mb-3">
                Apply for {job.title}
              </h2>
              <p className="text-slate-600">
                Complete the form below and submit your application directly from this page.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-navy-950 mb-2">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    autoComplete="given-name"
                    required
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    aria-invalid={Boolean(errors.firstName)}
                    aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                  />
                  {renderError('firstName', 'firstName-error')}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-navy-950 mb-2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    autoComplete="family-name"
                    required
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    aria-invalid={Boolean(errors.lastName)}
                    aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                  />
                  {renderError('lastName', 'lastName-error')}
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-navy-950 mb-2">
                    Experience
                  </label>
                  <input
                    id="experience"
                    name="experience"
                    type="text"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="e.g. 5 years in SaaS engineering"
                    required
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    aria-invalid={Boolean(errors.experience)}
                  />
                  {renderError('experience', 'experience-error')}
                </div>

                <div>
                  <label
                    htmlFor="expectedSalary"
                    className="block text-sm font-semibold text-navy-950 mb-2"
                  >
                    Expected Salary
                  </label>
                  <input
                    id="expectedSalary"
                    name="expectedSalary"
                    type="text"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    placeholder="e.g. USD 90,000/year"
                    required
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    aria-invalid={Boolean(errors.expectedSalary)}
                  />
                  {renderError('expectedSalary', 'expectedSalary-error')}
                </div>

                <div>
                  <label htmlFor="currentSalary" className="block text-sm font-semibold text-navy-950 mb-2">
                    Current Salary
                  </label>
                  <input
                    id="currentSalary"
                    name="currentSalary"
                    type="text"
                    value={formData.currentSalary}
                    onChange={handleInputChange}
                    placeholder="e.g. USD 75,000/year"
                    required
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    aria-invalid={Boolean(errors.currentSalary)}
                  />
                  {renderError('currentSalary', 'currentSalary-error')}
                </div>

                <div>
                  <label
                    htmlFor="linkedInProfile"
                    className="block text-sm font-semibold text-navy-950 mb-2"
                  >
                    LinkedIn Profile
                  </label>
                  <input
                    id="linkedInProfile"
                    name="linkedInProfile"
                    type="url"
                    value={formData.linkedInProfile}
                    onChange={handleInputChange}
                    placeholder="https://www.linkedin.com/in/your-profile"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    aria-invalid={Boolean(errors.linkedInProfile)}
                  />
                  {renderError('linkedInProfile', 'linkedInProfile-error')}
                </div>
              </div>

              <div>
                <label
                  htmlFor="reasonForLeaving"
                  className="block text-sm font-semibold text-navy-950 mb-2"
                >
                  Reason for Leaving Company
                </label>
                <textarea
                  id="reasonForLeaving"
                  name="reasonForLeaving"
                  value={formData.reasonForLeaving}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  aria-invalid={Boolean(errors.reasonForLeaving)}
                />
                {renderError('reasonForLeaving', 'reasonForLeaving-error')}
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-semibold text-navy-950 mb-2">
                  Resume
                </label>
                <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 transition hover:border-accent hover:bg-accent/5">
                  <span className="flex items-center gap-3 text-slate-600">
                    <Upload className="h-5 w-5 text-accent" />
                    {formData.resume ? formData.resume.name : 'Upload your resume (.pdf, .doc, .docx)'}
                  </span>
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy-950 shadow-sm">
                    Choose file
                  </span>
                  <input
                    ref={resumeInputRef}
                    id="resume"
                    name="resume"
                    type="file"
                    accept={acceptedResumeTypes}
                    onChange={handleResumeChange}
                    required
                    className="sr-only"
                  />
                </label>
                {formData.resume ? (
                  <p className="mt-2 text-sm text-slate-500">
                    Selected file: {formData.resume.name} ({Math.max(1, Math.round(formData.resume.size / 1024))} KB)
                  </p>
                ) : null}
                {renderError('resume', 'resume-error')}
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-sm font-semibold text-navy-950 mb-2">
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  aria-invalid={Boolean(errors.coverLetter)}
                />
                {renderError('coverLetter', 'coverLetter-error')}
              </div>

              <div>
                <label htmlFor="portfolio" className="block text-sm font-semibold text-navy-950 mb-2">
                  Portfolio
                </label>
                <input
                  id="portfolio"
                  name="portfolio"
                  type="url"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  placeholder="https://your-portfolio.com"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  aria-invalid={Boolean(errors.portfolio)}
                />
                {renderError('portfolio', 'portfolio-error')}
              </div>

              {submissionMessage ? (
                <div
                  className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                    Object.keys(errors).length > 0
                      ? 'bg-red-50 text-red-700 border border-red-100'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                  }`}
                  role="status"
                >
                  {submissionMessage}
                </div>
              ) : null}

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-500">
                  Required fields must be completed before your application can be submitted.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-2xl bg-accent px-8 py-4 font-bold text-navy-950 transition-all hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting application...' : 'Submit application'}
                </button>
              </div>
            </form>
          </motion.section>
        ) : null}
      </div>
    </article>
  );
}
