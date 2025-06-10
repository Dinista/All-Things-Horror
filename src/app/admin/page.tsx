'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Shield, Lock, Mail, AlertCircle } from 'lucide-react';

interface LoginForm {
    email: string;
    password: string;
    rememberMe: boolean;
}

export default function AdminLoginPanel() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch
    } = useForm<LoginForm>({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        }
    });

    const onSubmit = async (data: LoginForm) => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Login data:', data);
        setIsLoading(false);
    };

    const watchedFields = watch();

    return (
        <div className="min-h-screen bg-gradient-to-br  via-gray-800 to-black flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(199,50,40,0.1),transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />

            <div className="w-full max-w-md relative">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-blue-600 rounded-xl mb-4 shadow-lg">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-white font-genera mb-2">
                            Admin Portal
                        </h1>
                        <p className="text-gray-300 text-sm font-argentum">
                            Sign in to access your dashboard
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-200 font-neoplanta">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    type="email"
                                    id="email"
                                    className={`w-full pl-10 pr-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${errors.email
                                        ? 'border-red-500 focus:ring-red-500/50'
                                        : 'border-white/20 focus:ring-blue-500/50 focus:border-blue-500/50'
                                        }`}
                                    placeholder="admin@example.com"
                                />
                            </div>
                            {errors.email && (
                                <div className="flex items-center space-x-1 text-red-400 text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>{errors.email.message}</span>
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-200 font-neoplanta">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 8,
                                            message: 'Password must be at least 8 characters'
                                        }
                                    })}
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className={`w-full pl-10 pr-12 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${errors.password
                                        ? 'border-red-500 focus:ring-red-500/50'
                                        : 'border-white/20 focus:ring-blue-500/50 focus:border-blue-500/50'
                                        }`}
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                            {errors.password && (
                                <div className="flex items-center space-x-1 text-red-400 text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>{errors.password.message}</span>
                                </div>
                            )}
                        </div>

                        {/* <div className="flex items-center justify-between">
                            <label className="flex items-center space-x-2">
                                <input
                                    {...register('rememberMe')}
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-transparent border-white/20 rounded focus:ring-blue-500 focus:ring-2"
                                />
                                <span className="text-sm text-gray-300 font-argentum">Remember me</span>
                            </label>
                            <button
                                type="button"
                                className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-argentum"
                            >
                                Forgot password?
                            </button>
                        </div> */}


                        <div
                            onClick={handleSubmit(onSubmit)}
                            className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 focus:outline-none cursor-pointer text-center ${!isValid || isLoading
                                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                                }`}
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                    <span>Signing in...</span>
                                </div>
                            ) : (
                                'Sign In'
                            )}
                        </div>
                    </div>


                    <div className="mt-8 pt-6 border-t border-white/10 text-center">
                        <p className="text-xs text-gray-400 font-argentum">
                            Protected by Supernatural Powers
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};