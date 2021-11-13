/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/solid';

const steps = [
  {
    name: 'Create account',
    description: 'Vitae sed mi luctus laoreet.',
    href: '#',
    status: 'complete',
  },
  {
    name: 'Profile information',
    description: 'Cursus semper viverra facilisis et et some more.',
    href: '#',
    status: 'current',
  },
  {
    name: 'Business information',
    description: 'Penatibus eu quis ante.',
    href: '#',
    status: 'upcoming',
  },
  {
    name: 'Theme',
    description: 'Faucibus nec enim leo et.',
    href: '#',
    status: 'upcoming',
  },
  {
    name: 'Preview',
    description: 'Iusto et officia maiores porro ad non quas.',
    href: '#',
    status: 'upcoming',
  },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

export default function History() {
  return (
    <section
      id="historia"
      className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div className="relative">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3 flex"></div>
        </div>

        {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 " /> */}
        <div className="max-w-7xl mx-auto grid grid-cols-12 grid-rows-6">
          <div className="col-span-full row-start-2 row-end-6 relative shadow-xl sm:rounded-2xl sm:overflow-hidden p-10">
            <div className="absolute inset-0">
              {/* <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                alt="People working on laptops"
              /> */}
              <div className="absolute inset-0 bg-gray-100" />
            </div>

            <nav aria-label="Progress">
              <ol role="list" className="overflow-hidden">
                {steps.map((step, stepIdx) => (
                  <li
                    key={step.name}
                    className={`${
                      stepIdx !== steps.length - 1 ? 'pb-10' : ''
                    } relative`}
                  >
                    {step.status === 'complete' ? (
                      <>
                        {stepIdx !== steps.length - 1 ? (
                          <div
                            className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600"
                            aria-hidden="true"
                          />
                        ) : null}
                        <a
                          href={step.href}
                          className="relative flex items-start group"
                        >
                          <span className="h-9 flex items-center">
                            <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                              <CheckIcon
                                className="w-5 h-5 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </span>
                          <span className="ml-4 min-w-0 flex flex-col">
                            <span className="text-xs font-semibold tracking-wide uppercase">
                              {step.name}
                            </span>
                            <span className="text-sm text-gray-500">
                              {step.description}
                            </span>
                          </span>
                        </a>
                      </>
                    ) : step.status === 'current' ? (
                      <>
                        {stepIdx !== steps.length - 1 ? (
                          <div
                            className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                            aria-hidden="true"
                          />
                        ) : null}
                        <a
                          href={step.href}
                          className="relative flex items-start group"
                          aria-current="step"
                        >
                          <span
                            className="h-9 flex items-center"
                            aria-hidden="true"
                          >
                            <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full">
                              <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full" />
                            </span>
                          </span>
                          <span className="ml-4 min-w-0 flex flex-col">
                            <span className="text-xs font-semibold tracking-wide uppercase text-indigo-600">
                              {step.name}
                            </span>
                            <span className="text-sm text-gray-500">
                              {step.description}
                            </span>
                          </span>
                        </a>
                      </>
                    ) : (
                      <>
                        {stepIdx !== steps.length - 1 ? (
                          <div
                            className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                            aria-hidden="true"
                          />
                        ) : null}
                        <a
                          href={step.href}
                          className="relative flex items-start group"
                        >
                          <span
                            className="h-9 flex items-center"
                            aria-hidden="true"
                          >
                            <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                              <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                            </span>
                          </span>
                          <span className="ml-4 min-w-0 flex flex-col">
                            <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">
                              {step.name}
                            </span>
                            <span className="text-sm text-gray-500">
                              {step.description}
                            </span>
                          </span>
                        </a>
                      </>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <div className="col-start-6 col-end-12 row-span-full relative shadow-xl sm:rounded-2xl sm:overflow-hidden bg-gray-200">
            <div className="p-10 text-xl text-gray-900">
              <h2>Otsikko</h2>
            </div>
            {/* <div className="absolute inset-0 bg-gray-200" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
