import React, { useState, useEffect } from 'react';

interface LinkIconProps extends React.SVGProps<SVGSVGElement> { }

export default function Portfolio() {
    // Initialize darkMode state based on the system preference
    const [darkMode, setDarkMode] = useState(
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    useEffect(() => {
        // Function to update the darkMode state based on the system preference
        const handleDarkModeChange = (e:MediaQueryListEvent) => {
            setDarkMode(e.matches);
        };

        // Add event listener for changes to the system preference
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeMediaQuery.addEventListener('change', handleDarkModeChange);

        // Set the initial body class based on the initial state
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }

        // Cleanup event listener on component unmount
        return () => {
            darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
        };
    }, [darkMode]);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    const navigateTo = (url:string) => {
        window.open(url, "_blank");
    }
    return (
        <main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
            <section className="grid gap-8 md:grid-cols-[200px_1fr] items-start">
                <div className="flex justify-center">
                    <img
                        alt="Profile"
                        className="rounded-full border border-gray-300"
                        height={200}
                        src="/profile_img.png"
                        style={{
                            aspectRatio: '200/200',
                            objectFit: 'cover',
                        }}
                        width={200}
                    />
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold dark:text-white">Mohamed Fatta</h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Full Stack Developer | Typescript | Java | AWS
                        </p>
                        <p className="inline-flex items-center gap-2  text-gray-700 dark:text-gray-400">
                            <GmailIcon className="h-5 w-5" />med3fata@gmail.com / <PhoneIcon className='h5 w-5 stroke-gray-700 dark:stroke-white'/>+212638653350
                        </p>
                    </div>
                    <p className="text-md text-gray-500 dark:text-gray-400">
                        I am a passionate Full Stack Developer with extensive experience in building diverse systems and web applications across various domains, including cloud computing, art, and streaming.
                        My strong technical background spans JavaScript, Angular, Node.js, Java, MongoDB, and PostgreSQL.
                        I am dedicated to solving real-world problems and continuously expanding my knowledge and skills.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                            <AngularIcon className="h-4 w-4" />
                            Angular
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium">
                            <NestjsIcon className="h-4 w-4" />
                            NestJs
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                            <TsIcon className="h-4 w-4" />
                            Ts
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                            <JavaIcon className="h-4 w-4" />
                            Java
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                            <MongoDbIcon className="h-4 w-4" />
                            MongoDb
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                            <PostgresqlIcon className="h-4 w-4" />
                            Postgres
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                            <PythonIcon className="h-4 w-4" />
                            Python
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                            <AwsIcon className="h-4 w-4" />
                            AWS
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                            Lambda Function
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                            DynamoDb
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                            SQS
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                            SNS
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-12 space-y-8">
                <div>
                    <h2 className="text-2xl font-bold dark:text-white">Experience</h2>
                    <div className="mt-4 space-y-4">
                        <div className="grid grid-cols-[80px_1fr] gap-4">
                            <div className="flex justify-center">
                                <a href="https://www.linkedin.com/company/94841697/" target="_blank">
                                    <img
                                        alt="Ntt_Data Morocco Logo"
                                        className="rounded-full h-min #1e293b"
                                        height={80}
                                        src="/ntt_data_morocco_logo.jpeg"
                                        width={80}
                                    />
                                </a>
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold dark:text-white">Software Engineer</h3>
                                        <p className="text-sm text-gray-700 dark:text-white">NTT DATA Morocco · Full-time</p>
                                        <p className="text-sm text-gray-500 dark:text-white">Feb 2023 - Present · 1 yr 4 mos</p>
                                        <p className="text-sm text-gray-500 dark:text-white">Morocco · Remote</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    I played a key role in enhancing and optimizing a system used by Sky operators to manage and resolve client issues related to internet and CPEs,
                                    ensuring seamless internet connection and streaming services for customers. My contributions included:
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-white">
                                    <li>
                                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                        Implemented an AWS serverless solution to handle the Users notifications using WEBSOCKETS.
                                    </li>

                                    <li>
                                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                        Debugged Aws Lambda Functions.
                                    </li>
                                    <li>
                                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                        Created Unit tests for existing lambda functions, using Pytest and mock.
                                    </li>
                                    <li>
                                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                        Reduced aws lambda functions cold starts and execution time.
                                    </li>
                                    <li>
                                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                        Understanding and Following Event driven architecture.
                                    </li>
                                    <li>
                                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                        Utilised lambda power tuning tool to reduce cost and increase performance.
                                    </li>
                                    <li>
                                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                        Refactored a custom Engine Evaluator in Python,used as an AWS lambda Layer for multiple Lambda functions.
                                    </li>
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                                        <PythonIcon className="h-4 w-4" />
                                        Python
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                                        <AwsIcon className="h-4 w-4" />
                                        AWS
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                                        Lambda Function
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                                        DynamoDb
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                                        SQS
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                                        SNS
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[80px_1fr] gap-4 pt-5">
                            <div className="flex justify-center">
                                <a href="https://www.linkedin.com/company/2907050/" target="_blank">
                                    <img
                                        alt="Fy Computing Logo"
                                        className="rounded-full h-min border #1e293b"
                                        height={80}
                                        src="/fycomputing_logo.jpeg"
                                        width={80}
                                    />
                                </a>
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold dark:text-white">Software Developer</h3>
                                        <p className="text-sm text-gray-700 dark:text-white">FY COMPUTING · Full-time</p>
                                        <p className="text-sm text-gray-500 dark:text-white">Oct 2021 - Mar 2023 · 1 yr 6 mos</p>
                                        <p className="text-sm text-gray-500 dark:text-white">Rabat, Rabat-Salé-Kenitra, Morocco · Remote</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Development of a multi tenant Saas platform for deploying - monitoring - scaling applications
                                    using cloud technologies (aws) :
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-white">
                                    <li>
                                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                        Implemented a solution for separating Data by organisation (multi tenancy).
                                    </li>
                                    <li>
                                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                        Implemented an IAM solution to add fine grained authorization rules.
                                    </li>
                                    <li>
                                        <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                        Secure secrets by using hashicorp Vault.
                                    </li>
                                    <li>
                                        <CheckIcon className='mr-2 inline-block h4 w-4'></CheckIcon>
                                        Implemented a custom Keycloak authentication flow.
                                    </li>
                                    <li>
                                        <CheckIcon className='mr-2 inline-block h4 w-4'></CheckIcon>
                                        Automated updating Keycloak authorization policies based on realm roles.
                                    </li>
                                    <li>
                                        <CheckIcon className='mr-2 inline-block h4 w-4'></CheckIcon>
                                        Implemented e2e test cases for deferent rest apis using robot framework.
                                    </li>
                                    <li>
                                        <CheckIcon className='mr-2 inline-block h4 w-4'></CheckIcon>
                                        Perform Code Reviews - Provide Constructive Feedback - Identify Issues
                                    </li>
                                    <li>
                                        <CheckIcon className='mr-2 inline-block h4 w-4'></CheckIcon>
                                        Implemented a generic REST API for managing files across different cloud providers and local disks, based on configurable settings.
                                    </li>
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                                        <AngularIcon className="h-4 w-4" />
                                        Angular
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                                        <NestjsIcon className="h-4 w-4" />
                                        NestJs
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                                        <TsIcon className="h-4 w-4" />
                                        Ts
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                                        <MongoDbIcon className="h-4 w-4" />
                                        MongoDb
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                                        Keycloak
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                                        AWS S3
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                                        Robot Framework
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium ">
                                        Docker
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-12 space-y-8">
                <div>
                    <h2 className="text-2xl font-bold dark:text-white">Education</h2>
                    <div className="grid grid-cols-[80px_1fr] gap-4 pt-5">
                        <div className="flex justify-center">
                            <a href="https://www.linkedin.com/company/ofpptpageofficielle/" target="_blank">
                                <img
                                    alt="Ofppt Logo"
                                    className="rounded-full h-min border #1e293b"
                                    height={80}
                                    src="/ofppt_logo.png"
                                    width={80}
                                />
                            </a>
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold dark:text-white">Software Development Technician</h3>
                                    <p className="text-sm text-gray-700 dark:text-white">Ofppt Ista </p>
                                    <p className="text-sm text-gray-500 dark:text-white">2017 - 2019 · 2 yr</p>
                                    <p className="text-sm text-gray-500 dark:text-white">Agadir Ait Melloul · Morocco</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Graduated with a focus on web development and software engineering.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-12 space-y-8">
                <div>
                    <h2 className="text-2xl font-bold dark:text-white">Projects</h2>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="rounded-lg overflow-hidden shadow-md dark:shadow-none">
                            <img
                                alt="Project 1"
                                className="w-full h-48 object-cover"
                                height={400}
                                src="/emailNotifyer.png"
                                style={{
                                    aspectRatio: '600/400',
                                    objectFit: 'cover',
                                }}
                                width={600}
                            />
                            <div className="p-4 bg-white dark:bg-gray-950">
                                <h3 className="text-lg font-semibold dark:text-white">EmailNotifyer</h3>
                                <div className="flex flex-wrap gap-2 mt-2 text-xs ">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 font-medium ">
                                        <PythonIcon className="h-4 w-4" />
                                        Python
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 font-medium ">
                                        AWS Api Gateway
                                    </div>
                                     <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 font-medium ">
                                        Lambda Function
                                    </div>
                                     <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 font-medium ">
                                        S3
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 font-medium ">
                                        DynamoDb
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 font-medium ">
                                        Amazon SES
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    A serverless application to send emails based on AWS SES
                                </p>
                                <div className="w-full flex justify-end">
                                <button
                                onClick={() => navigateTo("https://github.com/medfata/emailNotifyer")} 
                                type="button" 
                                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg  px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                                    </svg>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-12 space-y-8">
                <div>
                    <h2 className="text-2xl font-bold dark:text-white">Languages</h2>
                    <div className="mt-4 space-y-2">
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-700 dark:text-white">English</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Professional Working Proficiency</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-700 dark:text-white">French</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Medium | Have Conversations | Writing</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-sm text-gray-700 dark:text-white">Arabic</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Native</span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="fixed bottom-4 right-4 z-50">
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                >
                    {darkMode ? <SunIcon className="h-6 w-6 dark:text-white" /> : <MoonIcon className="h-6 w-6" />}
                </button>
            </div>
        </main>
    );
}

function NestjsIcon(props: LinkIconProps) {
    return (
        <svg {...props} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="red">
            <title>Nestjs</title>
            <path d="M18.487,2a1.781,1.781,0,0,0-.564.1c1.615,1.062-.29,2.6.6,3.9A2.235,2.235,0,0,1,19.6,3.765c.285-.237.468-.322.407-.714C19.908,2.409,19.052,2,18.487,2Zm2.3.414c-.223,1.123-.5,1.164-1.323,1.887a1.821,1.821,0,0,0-.527,2.191c-3.4-1.32-7.758-2.118-10.953.166-1.149.821-1.85,2-3.267,2.481-.916.314-1.816.221-2.39,1.129A1.413,1.413,0,0,0,2.383,12.1c.171.175.5.287.636.465.079.1.077.2.152.333a2.6,2.6,0,0,0,.564.828c.147.121.652.239.738.368.108.161-.172.8.063.9.158.073.621-.744.666-.816-.092.643-.213,1.784.51.834.343-.451.364-.6.941-.7a8.2,8.2,0,0,1,1.117-.116,8.362,8.362,0,0,1,8.622,7.622c-.108-.5-.761-1.3-1.369-1.11-.259.08-.355.527-.525.786a3.773,3.773,0,0,1-.785.868,4.687,4.687,0,0,0-.072-1.452c-.182.748-.547,1.989-1.466,1.788a1.652,1.652,0,0,1-1.328-1.142c-.119-.76.684-1.651-.607-1.714-2.59-.127-1.991,3.682-.462,4.675a3.272,3.272,0,0,0-1.015.283,6.893,6.893,0,0,0,10.276-4.922,7.058,7.058,0,0,1-.015,3.085,7.213,7.213,0,0,1-.554,1.559,6.781,6.781,0,0,1-1.3,1.81c-.314.311-.89.624-1.088.941a13.409,13.409,0,0,0,3.52-.968A11.638,11.638,0,0,1,15.1,30a11.589,11.589,0,0,0,9.3-5.909,11.657,11.657,0,0,1-1.945,4.668,11.531,11.531,0,0,0,4.975-7.783,11.622,11.622,0,0,1,.209,3.5A12.418,12.418,0,0,0,29.528,13.91a15.755,15.755,0,0,0-1.689-3.962A14.838,14.838,0,0,0,26.9,8.554c-.133-.173-.844-.806-.844-1q-.009.029-.015,0c0,3.248-3.5,5.333-6.431,4.463A5,5,0,0,0,24.156,7.85,5,5,0,0,0,20.787,2.414Z" /></svg>
    )
}

function TsIcon(props: LinkIconProps) {
    return (
        <svg {...props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Typescritpt</title>
            <path fillRule="nonzero" clipRule="nonzero" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H9.25C9.66421 5.75 10 6.08579 10 6.5C10 6.91421 9.66421 7.25 9.25 7.25H8.25V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z" fill="#000000" />
        </svg>
    )
}

function AngularIcon(props: LinkIconProps) {
    return (
        <svg {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Angular</title>
            <path d="M16 2L3 7L5 24L16 30L27 24L29 7L16 2Z" fill="#DD0031" />
            <path d="M16 2V30L27 24L29 7L16 2Z" fill="#C3002F" />
            <path d="M15.9998 5.09375L7.87305 23.3638H10.9031L12.5368 19.2757H19.4348L21.0685 23.3638H24.0986L15.9998 5.09375ZM18.3736 16.7557H13.626L15.9998 11.0298L18.3736 16.7557Z" fill="white" />
        </svg>
    )
}

function JavaIcon(props: LinkIconProps) {
    return (
        <svg {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Java</title>
            <path d="M16.0497 8.44062C22.6378 3.32607 19.2566 0 19.2566 0C19.7598 5.28738 13.813 6.53583 12.2189 10.1692C11.1312 12.6485 12.9638 14.8193 16.0475 17.5554C15.7749 16.9494 15.3544 16.3606 14.9288 15.7645C13.4769 13.7313 11.9645 11.6132 16.0497 8.44062Z" fill="#E76F00" />
            <path d="M17.1015 18.677C17.1015 18.677 19.0835 17.0779 17.5139 15.3008C12.1931 9.27186 23.3333 6.53583 23.3333 6.53583C16.5317 9.8125 17.5471 11.7574 19.2567 14.1202C21.0871 16.6538 17.1015 18.677 17.1015 18.677Z" fill="#E76F00" />
            <path d="M22.937 23.4456C29.0423 20.3258 26.2195 17.3278 24.2492 17.7317C23.7662 17.8305 23.5509 17.9162 23.5509 17.9162C23.5509 17.9162 23.7302 17.64 24.0726 17.5204C27.9705 16.1729 30.9682 21.4949 22.8143 23.6028C22.8143 23.6029 22.9088 23.5198 22.937 23.4456Z" fill="#5382A1" />
            <path d="M10.233 19.4969C6.41312 18.9953 12.3275 17.6139 12.3275 17.6139C12.3275 17.6139 10.0307 17.4616 7.20592 18.8043C3.86577 20.3932 15.4681 21.1158 21.474 19.5625C22.0984 19.1432 22.9614 18.7798 22.9614 18.7798C22.9614 18.7798 20.5037 19.2114 18.0561 19.4145C15.0612 19.6612 11.8459 19.7093 10.233 19.4969Z" fill="#5382A1" />
            <path d="M11.6864 22.4758C9.55624 22.2592 10.951 21.2439 10.951 21.2439C5.43898 23.0429 14.0178 25.083 21.7199 22.8682C20.9012 22.5844 20.3806 22.0653 20.3806 22.0653C16.6163 22.7781 14.441 22.7553 11.6864 22.4758Z" fill="#5382A1" />
            <path d="M12.6145 25.6991C10.486 25.4585 11.7295 24.7474 11.7295 24.7474C6.72594 26.1222 14.7729 28.9625 21.1433 26.2777C20.0999 25.8787 19.3528 25.4181 19.3528 25.4181C16.5111 25.9469 15.1931 25.9884 12.6145 25.6991Z" fill="#5382A1" />
            <path d="M25.9387 27.3388C25.9387 27.3388 26.8589 28.0844 24.9252 28.6612C21.2481 29.7566 9.62093 30.0874 6.39094 28.7049C5.22984 28.2082 7.40723 27.5189 8.09215 27.3742C8.80646 27.2219 9.21466 27.2503 9.21466 27.2503C7.9234 26.3558 0.868489 29.0067 5.63111 29.7659C18.6195 31.8372 29.3077 28.8331 25.9387 27.3388Z" fill="#5382A1" />
            <path d="M28 28.9679C27.7869 31.6947 18.7877 32.2683 12.9274 31.8994C9.10432 31.6583 8.33812 31.0558 8.32691 31.047C11.9859 31.6402 18.1549 31.7482 23.1568 30.8225C27.5903 30.0016 28 28.9679 28 28.9679Z" fill="#5382A1" />
        </svg>
    )
}

function MongoDbIcon(props: LinkIconProps) {
    return (
        <svg {...props} fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>mongodb</title>
            <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z" />
        </svg>
    )
}

function PostgresqlIcon(props: LinkIconProps) {
    return (
        <svg {...props} fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>postgresql</title>
            <path d="M24.295 9.929c-0.010 0.155-0.082 0.292-0.191 0.387l-0.001 0.001c-0.131 0.143-0.306 0.243-0.504 0.278l-0.005 0.001c-0.028 0.004-0.061 0.007-0.094 0.007h-0c-0.001 0-0.003 0-0.004 0-0.312 0-0.58-0.189-0.694-0.46l-0.002-0.005c-0.030-0.221 0.33-0.388 0.701-0.44s0.764 0.011 0.794 0.231zM14.385 10.443c-0.121 0.311-0.418 0.528-0.766 0.528-0.004 0-0.007-0-0.011-0h0.001c-0 0-0 0-0 0-0.036 0-0.070-0.003-0.105-0.007l0.004 0c-0.261-0.047-0.483-0.191-0.63-0.392l-0.002-0.003c-0.082-0.094-0.132-0.219-0.132-0.354 0-0 0-0.001 0-0.001v0c0.012-0.077 0.055-0.143 0.115-0.185l0.001-0.001c0.152-0.084 0.334-0.133 0.528-0.133 0.083 0 0.164 0.009 0.242 0.026l-0.007-0.001c0.395 0.055 0.803 0.242 0.764 0.523zM25.403 18.086l-0.107-0.134-0.044-0.055c0.457-0.846 0.725-1.853 0.725-2.921 0-0.488-0.056-0.962-0.162-1.418l0.008 0.042c-0.070-0.453-0.111-0.976-0.111-1.508 0-0.007 0-0.014 0-0.021v0.001c0.023-0.501 0.076-0.97 0.158-1.429l-0.010 0.066c0.089-0.464 0.14-0.998 0.14-1.544 0-0.051-0-0.101-0.001-0.151l0 0.008c0.012-0.049 0.019-0.104 0.019-0.162 0-0.027-0.002-0.053-0.004-0.079l0 0.003c-0.4-1.58-1.151-2.949-2.168-4.073l0.007 0.008c-0.911-1.068-2.031-1.929-3.3-2.523l-0.060-0.025c0.696-0.149 1.496-0.234 2.316-0.234 0.075 0 0.15 0.001 0.225 0.002l-0.011-0c0.045-0.001 0.097-0.002 0.15-0.002 2.378 0 4.496 1.109 5.866 2.838l0.012 0.016c0.028 0.036 0.056 0.077 0.080 0.12l0.003 0.005c0.904 1.694-0.345 7.842-3.732 13.172zM25.117 9.322c-0.016 0.455-0.064 0.886-0.14 1.307l0.008-0.055c-0.078 0.425-0.134 0.931-0.157 1.445l-0.001 0.025c-0 0.017-0 0.036-0 0.056 0 0.567 0.042 1.124 0.124 1.668l-0.008-0.061c0.085 0.377 0.134 0.809 0.134 1.254 0 0.763-0.144 1.493-0.407 2.162l0.014-0.040c-0.076-0.131-0.155-0.289-0.224-0.453l-0.011-0.029c-0.066-0.159-0.209-0.416-0.406-0.77-0.769-1.38-2.571-4.611-1.649-5.929 0.474-0.678 1.676-0.707 2.722-0.579zM24.406 20.907c-0.051-1.039 0.336-1.148 0.746-1.263q0.085-0.023 0.169-0.051c0.050 0.044 0.105 0.087 0.162 0.125l0.005 0.003c0.62 0.273 1.342 0.431 2.102 0.431 0.592 0 1.161-0.096 1.693-0.274l-0.038 0.011c-0.344 0.293-0.736 0.544-1.16 0.738l-0.031 0.013c-0.644 0.264-1.391 0.429-2.173 0.454l-0.010 0c-0.119 0.018-0.256 0.029-0.395 0.029-0.386 0-0.754-0.080-1.087-0.224l0.018 0.007zM23.293 22.933c-0.021 0.221-0.045 0.47-0.077 0.745l-0.182 0.548c-0.014 0.040-0.022 0.086-0.023 0.134v0c0.001 0.027 0.001 0.058 0.001 0.089 0 0.355-0.053 0.699-0.151 1.022l0.006-0.025c-0.116 0.389-0.196 0.84-0.223 1.305l-0.001 0.016c-0.052 1.684-1.355 3.047-3.008 3.194l-0.013 0.001c-1.894 0.406-2.23-0.621-2.526-1.527q-0.045-0.142-0.096-0.283c-0.16-0.652-0.252-1.401-0.252-2.171 0-0.36 0.020-0.715 0.059-1.065l-0.004 0.043c0.006-0.128 0.009-0.279 0.009-0.43 0-1.026-0.154-2.016-0.441-2.948l0.019 0.071q0.008-0.55 0.024-1.114c0-0.003 0-0.008 0-0.012 0-0.046-0.007-0.090-0.020-0.132l0.001 0.003c-0.014-0.1-0.033-0.188-0.058-0.273l0.003 0.013c-0.141-0.521-0.496-0.941-0.964-1.164l-0.011-0.005c-0.176-0.088-0.384-0.14-0.605-0.14-0.104 0-0.205 0.011-0.302 0.033l0.009-0.002c0.128-0.47 0.26-0.854 0.412-1.228l-0.026 0.073 0.066-0.177c0.074-0.2 0.167-0.407 0.266-0.626 0.546-1.124 0.865-2.445 0.865-3.841 0-0.938-0.144-1.842-0.411-2.692l0.017 0.063c-0.183-1.108-1.135-1.943-2.281-1.943-0.18 0-0.356 0.021-0.524 0.060l0.016-0.003c-0.796 0.104-1.516 0.338-2.171 0.682l0.035-0.017q-0.124 0.063-0.245 0.13c0.091-2.147 0.896-4.090 2.181-5.615l-0.012 0.014c0.118-0.119 0.242-0.232 0.37-0.338l0.009-0.007c0.069-0.014 0.13-0.042 0.182-0.081l-0.001 0.001c0.893-0.654 2.014-1.047 3.227-1.047 0.097 0 0.193 0.002 0.288 0.007l-0.013-0.001c0.526 0.008 1.034 0.044 1.534 0.108l-0.067-0.007c2.043 0.393 3.787 1.463 5.032 2.963l0.011 0.014c0.748 0.869 1.354 1.887 1.766 2.998l0.022 0.069c-0.257-0.069-0.552-0.109-0.856-0.109-0.983 0-1.868 0.416-2.49 1.081l-0.002 0.002c-1.24 1.773 0.679 5.215 1.601 6.869 0.169 0.303 0.315 0.565 0.361 0.676 0.26 0.601 0.587 1.118 0.98 1.577l-0.007-0.008c0.087 0.109 0.171 0.214 0.236 0.306-0.501 0.144-1.401 0.478-1.319 2.146-0.015 0.195-0.053 0.558-0.104 1.018-0.054 0.269-0.098 0.597-0.123 0.93l-0.002 0.028zM14.091 17.219l-0.066 0.176c-0.137 0.328-0.279 0.745-0.397 1.172l-0.019 0.081c-0.893-0.013-1.695-0.395-2.261-1.001l-0.002-0.002c-0.632-0.667-1.020-1.57-1.020-2.564 0-0.198 0.015-0.392 0.045-0.582l-0.003 0.021c0.097-0.72 0.153-1.551 0.153-2.396 0-0.502-0.020-0.999-0.058-1.491l0.004 0.065c-0.006-0.107-0.012-0.201-0.015-0.275 0.805-0.611 1.824-0.98 2.929-0.98 0.132 0 0.262 0.005 0.391 0.015l-0.017-0.001c0.554 0.129 0.971 0.588 1.037 1.153l0.001 0.006c0.238 0.728 0.375 1.566 0.375 2.435 0 1.266-0.291 2.464-0.809 3.532l0.021-0.048c-0.105 0.233-0.204 0.453-0.289 0.682zM11.474 22.203c-0.205-0.052-0.385-0.128-0.549-0.227l0.009 0.005c0.172-0.073 0.375-0.134 0.585-0.173l0.019-0.003c1.604-0.33 1.851-0.563 2.392-1.25 0.124-0.157 0.264-0.336 0.459-0.553 0.040-0.045 0.072-0.099 0.091-0.159l0.001-0.003c0.213-0.189 0.34-0.137 0.546-0.052 0.227 0.125 0.395 0.336 0.46 0.587l0.001 0.007c0.023 0.065 0.037 0.139 0.037 0.217 0 0.125-0.035 0.242-0.095 0.341l0.002-0.003c-0.645 0.882-1.676 1.449-2.839 1.449-0.4 0-0.785-0.067-1.144-0.191l0.025 0.007zM3.967 15.846c-0.651-1.985-1.181-4.34-1.494-6.764l-0.021-0.199c-0.061-0.322-0.095-0.693-0.095-1.071 0-1.806 0.789-3.427 2.041-4.537l0.006-0.005c2.295-1.623 6.048-0.676 7.633-0.163l-0.012 0.012c-1.535 1.872-2.466 4.292-2.466 6.928 0 0.090 0.001 0.18 0.003 0.27l-0-0.013c-0 0.103 0.008 0.249 0.020 0.449 0.033 0.41 0.052 0.888 0.052 1.371 0 0.802-0.052 1.592-0.154 2.367l0.010-0.091c-0.033 0.206-0.051 0.444-0.051 0.686 0 1.231 0.482 2.35 1.269 3.177l-0.002-0.002q0.151 0.158 0.315 0.297c-0.433 0.464-1.375 1.49-2.377 2.696-0.709 0.853-1.199 0.689-1.36 0.636-0.685-0.368-1.222-0.939-1.538-1.631l-0.009-0.022c-0.684-1.252-1.286-2.708-1.73-4.232l-0.039-0.157zM30.445 19.403c-0.019-0.057-0.043-0.106-0.072-0.151l0.002 0.003c-0.174-0.329-0.596-0.427-1.259-0.29-2.066 0.426-2.866 0.164-3.156-0.024 1.617-2.452 2.918-5.292 3.751-8.326l0.049-0.209c0.339-1.313 0.997-4.403 0.153-5.913-0.059-0.112-0.122-0.208-0.192-0.298l0.003 0.004c-1.563-1.955-3.948-3.196-6.623-3.196-0.076 0-0.152 0.001-0.227 0.003l0.011-0c-0.042-0.001-0.091-0.001-0.141-0.001-1.342 0-2.633 0.22-3.838 0.625l0.085-0.025q-0.321-0.060-0.645-0.102c-0.488-0.093-1.053-0.151-1.631-0.16l-0.008-0c-0.083-0.004-0.18-0.006-0.278-0.006-1.315 0-2.538 0.394-3.557 1.071l0.024-0.015c-1.071-0.401-5.984-2.056-9.025 0.098-1.489 1.27-2.426 3.147-2.426 5.244 0 0.405 0.035 0.802 0.102 1.188l-0.006-0.041c0.335 2.698 0.879 5.126 1.632 7.461l-0.079-0.284c0.493 1.716 1.103 3.201 1.852 4.6l-0.061-0.124c0.433 0.984 1.182 1.764 2.116 2.225l0.026 0.012c0.168 0.049 0.361 0.078 0.561 0.078 0.742 0 1.392-0.391 1.756-0.979l0.005-0.009c1.001-1.204 1.987-2.282 2.43-2.758 0.502 0.279 1.097 0.451 1.731 0.471l0.006 0 0.001 0.005q-0.158 0.188-0.309 0.382c-0.424 0.538-0.512 0.649-1.875 0.93-0.388 0.080-1.418 0.292-1.433 1.014-0 0.004-0 0.008-0 0.013 0 0.147 0.043 0.284 0.117 0.399l-0.002-0.003c0.312 0.395 0.751 0.678 1.254 0.788l0.015 0.003c0.399 0.13 0.859 0.205 1.335 0.205 1.1 0 2.106-0.398 2.884-1.058l-0.006 0.005c-0.024 0.418-0.037 0.908-0.037 1.401 0 1.753 0.171 3.467 0.496 5.125l-0.027-0.167c0.382 1.373 1.616 2.367 3.084 2.38h0.002c0.369-0.003 0.726-0.046 1.070-0.124l-0.033 0.006c1.919-0.171 3.431-1.705 3.567-3.619l0.001-0.012c0.188-1.088 0.502-3.593 0.673-5.125 0.008-0.065 0.034-0.123 0.072-0.171l-0.001 0.001c0.001-0.001 0.087-0.059 0.534 0.038l0.055 0.009 0.317 0.028 0.019 0.001c0.095 0.004 0.207 0.007 0.319 0.007 1.024 0 2.002-0.2 2.895-0.564l-0.051 0.018c0.805-0.373 2.256-1.29 1.993-2.087z" />
        </svg>
    )
}


function MoonIcon(props: LinkIconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    )
}

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
    );
}


function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}

function PythonIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" >

            <title>python</title>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7599.000000)" fill="#000000">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M296.744,7457.45798 C296.262,7457.45798 295.872,7457.06594 295.872,7456.58142 C295.872,7456.0969 296.262,7455.70587 296.744,7455.70587 C297.226,7455.70587 297.616,7456.0969 297.616,7456.58142 C297.616,7457.06594 297.226,7457.45798 296.744,7457.45798 M294.072,7459 C299.15,7459 298.833,7456.78649 298.833,7456.78649 L298.827,7454.49357 L293.982,7454.49357 L293.982,7453.80499 L300.751,7453.80499 C300.751,7453.80499 304,7454.17591 304,7449.02614 C304,7443.87636 301.165,7444.0583 301.165,7444.0583 L299.472,7444.0583 L299.472,7446.44873 C299.472,7446.44873 299.563,7449.29855 296.682,7449.29855 L291.876,7449.29855 C291.876,7449.29855 289.176,7449.25533 289.176,7451.9222 L289.176,7456.33112 C289.176,7456.33112 288.766,7459 294.072,7459 M291.257,7440.54202 C291.739,7440.54202 292.128,7440.93406 292.128,7441.41858 C292.128,7441.9031 291.739,7442.29413 291.257,7442.29413 C290.775,7442.29413 290.385,7441.9031 290.385,7441.41858 C290.385,7440.93406 290.775,7440.54202 291.257,7440.54202 M293.928,7439 C288.851,7439 289.168,7441.21351 289.168,7441.21351 L289.174,7443.50643 L294.019,7443.50643 L294.019,7444.19501 L287.249,7444.19501 C287.249,7444.19501 284,7443.82409 284,7448.97386 C284,7454.12364 286.836,7453.9417 286.836,7453.9417 L288.528,7453.9417 L288.528,7451.55127 C288.528,7451.55127 288.437,7448.70145 291.319,7448.70145 L296.124,7448.70145 C296.124,7448.70145 298.824,7448.74467 298.824,7446.0778 L298.824,7441.66888 C298.824,7441.66888 299.234,7439 293.928,7439" id="python-[#127]">

                        </path>
                    </g>
                </g>
            </g>
        </svg>
    )
}

function AwsIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">

            <g fill="#000000">

                <path d="M4.51 7.687c0 .197.02.357.058.475.042.117.096.245.17.384a.233.233 0 01.037.123c0 .053-.032.107-.1.16l-.336.224a.255.255 0 01-.138.048c-.054 0-.107-.026-.16-.074a1.652 1.652 0 01-.192-.251 4.137 4.137 0 01-.164-.315c-.416.491-.937.737-1.565.737-.447 0-.804-.129-1.064-.385-.261-.256-.394-.598-.394-1.025 0-.454.16-.822.484-1.1.325-.278.756-.416 1.304-.416.18 0 .367.016.564.042.197.027.4.07.612.118v-.39c0-.406-.085-.689-.25-.854-.17-.166-.458-.246-.868-.246-.186 0-.377.022-.574.07a4.23 4.23 0 00-.575.181 1.525 1.525 0 01-.186.07.326.326 0 01-.085.016c-.075 0-.112-.054-.112-.166v-.262c0-.085.01-.15.037-.186a.399.399 0 01.15-.113c.185-.096.409-.176.67-.24.26-.07.537-.101.83-.101.633 0 1.096.144 1.394.432.293.288.442.726.442 1.314v1.73h.01zm-2.161.811c.175 0 .356-.032.548-.096.192-.064.362-.182.505-.342a.848.848 0 00.181-.341c.032-.129.054-.283.054-.465V7.03a4.43 4.43 0 00-.49-.09 3.996 3.996 0 00-.5-.033c-.357 0-.617.07-.793.214-.176.144-.26.347-.26.614 0 .25.063.437.196.566.128.133.314.197.559.197zm4.273.577c-.096 0-.16-.016-.202-.054-.043-.032-.08-.106-.112-.208l-1.25-4.127a.938.938 0 01-.048-.214c0-.085.042-.133.127-.133h.522c.1 0 .17.016.207.053.043.032.075.107.107.208l.894 3.535.83-3.535c.026-.106.058-.176.101-.208a.365.365 0 01.213-.053h.426c.1 0 .17.016.212.053.043.032.08.107.102.208l.84 3.578.92-3.578a.459.459 0 01.107-.208.347.347 0 01.208-.053h.495c.085 0 .133.043.133.133 0 .027-.006.054-.01.086a.768.768 0 01-.038.133l-1.283 4.127c-.031.107-.069.177-.111.209a.34.34 0 01-.203.053h-.457c-.101 0-.17-.016-.213-.053-.043-.038-.08-.107-.101-.214L8.213 5.37l-.82 3.439c-.026.107-.058.176-.1.213-.043.038-.118.054-.213.054h-.458zm6.838.144a3.51 3.51 0 01-.82-.096c-.266-.064-.473-.134-.612-.214-.085-.048-.143-.101-.165-.15a.38.38 0 01-.031-.149v-.272c0-.112.042-.166.122-.166a.3.3 0 01.096.016c.032.011.08.032.133.054.18.08.378.144.585.187.213.042.42.064.633.064.336 0 .596-.059.777-.176a.575.575 0 00.277-.508.52.52 0 00-.144-.373c-.095-.102-.276-.193-.537-.278l-.772-.24c-.388-.123-.676-.305-.851-.545a1.275 1.275 0 01-.266-.774c0-.224.048-.422.143-.593.096-.17.224-.32.384-.438.16-.122.34-.213.553-.277.213-.064.436-.091.67-.091.118 0 .24.005.357.021.122.016.234.038.346.06.106.026.208.052.303.085.096.032.17.064.224.096a.461.461 0 01.16.133.289.289 0 01.047.176v.251c0 .112-.042.171-.122.171a.552.552 0 01-.202-.064 2.428 2.428 0 00-1.022-.208c-.303 0-.543.048-.708.15-.165.1-.25.256-.25.475 0 .149.053.277.16.379.106.101.303.202.585.293l.756.24c.383.123.66.294.825.513.165.219.244.47.244.748 0 .23-.047.437-.138.619a1.435 1.435 0 01-.388.47c-.165.133-.362.23-.591.299-.24.075-.49.112-.761.112z" />

                <path fillRule="evenodd" d="M14.465 11.813c-1.75 1.297-4.294 1.986-6.481 1.986-3.065 0-5.827-1.137-7.913-3.027-.165-.15-.016-.353.18-.235 2.257 1.313 5.04 2.109 7.92 2.109 1.941 0 4.075-.406 6.039-1.239.293-.133.543.192.255.406z" clipRule="evenodd" />

                <path fillRule="evenodd" d="M15.194 10.98c-.223-.287-1.479-.138-2.048-.069-.17.022-.197-.128-.043-.24 1-.705 2.645-.502 2.836-.267.192.24-.053 1.89-.99 2.68-.143.123-.281.06-.217-.1.212-.53.686-1.72.462-2.003z" clipRule="evenodd" />

            </g>

        </svg>
    )
}

function GmailIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z" fill="white" />
            <path d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z" fill="#EA4335" />
            <path d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z" fill="#FBBC05" />
            <path d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z" fill="#34A853" />
            <path d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z" fill="#C5221F" />
            <path d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z" fill="#C5221F" />
            <path d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z" fill="#C5221F" />
            <path d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z" fill="#4285F4" />
        </svg>
    )
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>)
}