import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

// import * as React from 'react';

type ModalProps = {
  feature: {
    title: string;
    labels: {
      title: string;
      description: string;
    }[];
  };
};

const Modal = ({ feature }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  console.log(feature);

  return (
    <>
      <div
        onClick={openModal}
        className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer"
      >
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
            alt=""
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a className="hover:underline">post.category.name</a>
            </p>
            <p className="block mt-2">
              <a className="text-xl font-semibold text-gray-900">
                {feature.title}
              </a>
              <a className="mt-3 text-base text-gray-500">post.description</a>
            </p>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <p>
                <span className="sr-only">post.author.name</span>
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </p>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {/* <a className="hover:underline">Janne Saari</a> */}
                {feature.labels.map((label, i) => label.title)}
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="post.datetime">post.date</time>
                <span aria-hidden="true">&middot;</span>
                <span>post.readingTime read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-50" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {feature.title}
                </Dialog.Title>
                <div className="mt-2">
                  <img
                    className="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">post.description</p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Sulje
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
