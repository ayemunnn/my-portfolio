"use client";

import React from "react";
import { GitHubCalendar } from 'react-github-calendar';

const GithubMatrix = () => {
    return (
        <section id="github" className="px-2 sm:px-20 lg:px-20 mt-16">
            <hr className="mt-12" />
            <div className="mt-10 p-4 sm:p-6">
                <h2 className="font-bold text-2xl text-black dark:text-white mb-8">
                    GitHub Activity
                </h2>
                <div className="flex justify-center items-center bg-white dark:bg-gray-900 p-6 rounded-2xl border dark:border-gray-800 overflow-x-auto">
                    <GitHubCalendar
                        username="ayemunnn"
                        blockSize={12}
                        blockMargin={4}
                        fontSize={14}
                        theme={{
                            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default GithubMatrix;
