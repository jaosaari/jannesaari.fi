import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

// import * as React from 'react';

type ModalProps = {
  post: {
    title: string;
    description: string;
    imageUrl: string;
    date: string;
    datetime: string;
    readingTime: string;
    href: string;
    category: {
      name: string;
    };
    author: {
      imageUrl: string;
      name: string;
    };
  };
};

// export default function App(props: IAppProps) {
//   return <div></div>;
// }

const Modal = ({ post }: ModalProps) => {
  // const { title } = post;
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // console.log(post.title);

  console.log(post);
  console.log(post.title);
  console.log(post.imageUrl);
  return (
    <>
      <div
        onClick={openModal}
        className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer"
      >
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src={post.imageUrl}
            alt=""
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <p className="hover:underline">{post.category.name}</p>
            </p>
            <p className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {post.title}
              </p>
              <p className="mt-3 text-base text-gray-500">{post.description}</p>
            </p>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <p>
                <span className="sr-only">{post.author.name}</span>
                <img
                  className="h-10 w-10 rounded-full"
                  src={post.author.imageUrl}
                  alt=""
                />
              </p>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <p className="hover:underline">{post.author.name}</p>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readingTime} read</span>
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
                  {post.title}
                </Dialog.Title>
                <div className="mt-2">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{post.description}</p>
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
