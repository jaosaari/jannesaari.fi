import { Experience } from '@models/experience';
import { useState, Fragment } from 'react';
import { Tab, Transition } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTimeoutFn } from 'react-use';
import BlockContent from '@components/BlockContent';

type HistoryProps = {
  experiences: Experience[];
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const History = ({ experiences }: HistoryProps) => {
  const [active, setActive] = useState('haha');
  const [selected, setSelected] = useState('haha');
  const [isShowing, setIsShowing] = useState(true);
  const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);
  console.log(isShowing);
  return (
    <section
      id="history"
      className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div className="absolute z-10 bg-gray-100">
        <p>{active}</p>
        <p>{isShowing.toString()}</p>
      </div>
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3 flex"></div>
      </div>

      {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-purple-900 via-blue-900 to-ind go-900 " /> */}
      <Tab.Group
        defaultIndex={0}
        vertical
        as="nav"
        onChange={(index) => {
          console.log('Changed selected tab to:', index);
          setActive(index);
          setIsShowing(false);
          resetIsShowing();
        }}
        className="max-w-7xl mx-auto grid grid-cols-12 grid-rows-6"
      >
        <div className="col-span-full row-start-2 row-end-6 relative shadow-xl sm:rounded-2xl sm:overflow-hidden p-10">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gray-100" />
          </div>

          <Tab.List aria-label="Progress">
            <ol role="list" className="overflow-hidden">
              {experiences.map((experience, index) => (
                <Tab
                  key={index}
                  as="li"
                  className={({ selected }) =>
                    classNames(
                      'pb-10  relative cursor-pointer',
                      selected ? 'text-gray-900' : 'text-gray-400'
                    )
                  }
                >
                  {({ selected }) => (
                    <>
                      {index !== experiences.length - 1 ? (
                        <div
                          className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <a className="relative flex items-start group">
                        <span
                          className="h-9 flex items-center"
                          aria-hidden="true"
                        >
                          <span
                            className={`relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400 ${
                              selected ? 'bg-blue-500' : 'bg-white'
                            }`}
                          >
                            <span
                              className={`h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300 ${
                                selected ? 'bg-gray-300' : 'bg-white'
                              }`}
                            />
                          </span>
                        </span>
                        <span
                          // className="ml-4 min-w-0 flex flex-col"
                          className={`ml-4 min-w-0 flex flex-col hover:translate-x-1 transition transform ${
                            selected ? 'translate-x-1' : ''
                          }`}
                        >
                          <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">
                            {experience.company}
                          </span>
                          <span className="text-sm text-gray-600">
                            {experience.position}, {experience.location}
                          </span>
                          <span className="text-xs text-gray-400">
                            {`${experience.dates.start} - ${experience.dates.end} `}
                          </span>
                        </span>
                      </a>
                    </>
                  )}
                </Tab>
              ))}
            </ol>
          </Tab.List>
        </div>
        <Tab.Panels className="col-start-6 col-end-12 row-span-full relative shadow-xl sm:rounded-2xl sm:overflow-hidden bg-gray-200">
          <Transition
            // as={Fragment}
            show={isShowing}
            enter="transform transition duration-500"
            enterFrom="opacity-0 rotate-180 scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100 "
            leaveTo="opacity-0 scale-95 "
          >
            {experiences.map((experience, index) => (
              <Tab.Panel key={index} className="p-10 text-xl text-gray-500">
                {console.log('experience', experience)}
                <h2>{experience.company}</h2>
                <p>{`${experience.dates.start} - ${experience.dates.end} `}</p>
                <BlockContent blocks={experience.body} />
              </Tab.Panel>
            ))}
          </Transition>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default History;
