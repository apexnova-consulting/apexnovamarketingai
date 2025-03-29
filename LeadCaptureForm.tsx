'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  company: string;
  industry: string;
  employees: string;
  goals: string[];
};

export default function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [aiAnalysisResult, setAiAnalysisResult] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const industryOptions = [
    'E-commerce',
    'Finance',
    'Healthcare',
    'Technology',
    'Manufacturing',
    'Real Estate',
    'Education',
    'Hospitality',
    'Retail',
    'Other'
  ];
  
  const employeeOptions = [
    '1-10',
    '11-50',
    '51-200',
    '201-500',
    '501-1000',
    '1000+'
  ];
  
  const goalOptions = [
    'Increase revenue',
    'Improve operational efficiency',
    'Digital transformation',
    'Marketing optimization',
    'Customer acquisition',
    'Website development',
    'Data analysis'
  ];
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call to AI service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate AI response
      const mockAiResponse = `
        Based on your ${data.industry} business with ${data.employees} employees, 
        our AI recommends focusing on:
        
        1. ${data.goals.includes('Increase revenue') ? 'Strategic revenue growth through AI-powered customer segmentation' : 'Operational efficiency improvements'}
        2. ${data.goals.includes('Marketing optimization') ? 'Targeted digital marketing campaigns with ML-based optimization' : 'Data-driven process improvements'}
        3. ${data.goals.includes('Website development') ? 'Website redesign with conversion optimization' : 'Customer journey mapping and enhancement'}
        
        We've prepared a custom proposal for ${data.company} that can potentially increase growth by 28-35% within 6 months.
      `;
      
      setAiAnalysisResult(mockAiResponse);
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess && aiAnalysisResult) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-secondary-900 mb-4">Your AI Analysis is Ready!</h3>
        <div className="bg-secondary-50 p-4 rounded-lg mb-6 text-left whitespace-pre-line">
          {aiAnalysisResult}
        </div>
        <button
          className="btn btn-primary w-full"
          onClick={() => window.open('/schedule-call', '_blank')}
        >
          Schedule a Call to Discuss Results
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-xl font-bold text-secondary-900 mb-4">Get Your Free AI Business Analysis</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="John Smith"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
            Business Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="john@company.com"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              }
            })}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-1">
            Company Name
          </label>
          <input
            id="company"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Acme Inc."
            {...register('company', { required: 'Company name is required' })}
          />
          {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
        </div>
        
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-secondary-700 mb-1">
            Industry
          </label>
          <select
            id="industry"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            {...register('industry', { required: 'Please select an industry' })}
          >
            <option value="">Select Industry</option>
            {industryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.industry && <p className="mt-1 text-sm text-red-600">{errors.industry.message}</p>}
        </div>
        
        <div>
          <label htmlFor="employees" className="block text-sm font-medium text-secondary-700 mb-1">
            Company Size
          </label>
          <select
            id="employees"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            {...register('employees', { required: 'Please select company size' })}
          >
            <option value="">Select Number of Employees</option>
            {employeeOptions.map((option) => (
              <option key={option} value={option}>
                {option} employees
              </option>
            ))}
          </select>
          {errors.employees && <p className="mt-1 text-sm text-red-600">{errors.employees.message}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-1">
            Business Goals (Select all that apply)
          </label>
          <div className="space-y-2">
            {goalOptions.map((goal) => (
              <label key={goal} className="flex items-start">
                <input
                  type="checkbox"
                  value={goal}
                  className="mt-1 mr-2"
                  {...register('goals', { required: 'Please select at least one goal' })}
                />
                <span>{goal}</span>
              </label>
            ))}
          </div>
          {errors.goals && <p className="mt-1 text-sm text-red-600">{errors.goals.message}</p>}
        </div>
        
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Generate AI Analysis'
          )}
        </button>
      </form>
    </div>
  );
} 