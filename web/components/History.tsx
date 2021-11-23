/* This example requires Tailwind CSS v2.0+ */
import { Experience } from '@models/experience';
import { useState, Fragment } from 'react';
import { Tab, Transition } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

type HistoryProps = {
  experiences: Experience[];
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const History = ({ experiences }: HistoryProps) => {
  const [active, setActive] = useState('haha');
  const [selected, setSelected] = useState('haha');
  const [isShowing, setIsShowing] = useState(false);

  return (
    <section
      id="historia"
      className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3 flex"></div>
      </div>

      {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-purple-900 via-blue-900 to-ind go-900 " /> */}
      <Tab.Group
        vertical
        as="nav"
        onChange={(index) => {
          console.log('Changed selected tab to:', index);
          setActive(index);
          // setIsShowing((isShowing) => !isShowing);
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
                <Item
                  key={index}
                  experience={experience}
                  arrayLength={experiences.length}
                  index={index}
                ></Item>
              ))}
            </ol>
          </Tab.List>
        </div>
        <Tab.Panels className="col-start-6 col-end-12 row-span-full relative shadow-xl sm:rounded-2xl sm:overflow-hidden bg-gray-200">
          {/* <AnimatePresence initial={false} exitBeforeEnter> */}
          {experiences.map((experience, index) => (
            <Tab.Panel key={index} className="p-10 text-xl text-gray-500">
              {/* <Content experience></Content>
            // <h2>Otsikko</h2> */}
              <Transition
                // as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                appear
                show={isShowing}
              >
                <h2
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ delay: 1 }}
                >
                  {experience.title}
                </h2>
              </Transition>
            </Tab.Panel>
          ))}
          {/* </AnimatePresence> */}
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default History;

function Item({ experience, arrayLength, index, active }) {
  return (
    <Tab
      as="li"
      // caalassName={`${stepIdx !== steps.length - 1 ? 'pb-10' : ''} relative`}
      // className={`pb-10  relative cursor-pointer ${
      //   selected ? 'selected' : 'not selected'
      // }`}
      className={({ selected }) =>
        classNames('pb-10  relative cursor-pointer', selected ? 'haha' : 'nono')
      }
    >
      {index !== arrayLength - 1 ? (
        <div
          className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-200"
          aria-hidden="true"
        />
      ) : null}
      <a className="relative flex items-start group">
        <span className="h-9 flex items-center" aria-hidden="true">
          <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
            <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
          </span>
        </span>
        <span className="ml-4 min-w-0 flex flex-col">
          <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">
            {experience.title}
          </span>
          <span className="text-sm text-gray-500">devaaja</span>
        </span>
      </a>
    </Tab>
  );
}

// function Content({ experience }) {
//   return (
//     <>
//       <h2>{experience.title}</h2>
//       {/* <p>{experience.description}</p> */}
//     </>
//   );
// }
