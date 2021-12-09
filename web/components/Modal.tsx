import { Dialog, Transition } from '@headlessui/react';
import { Feature } from '@models/feature';
import { Label } from '@models/label';
import { Fragment, useState } from 'react';
import BlockContent from '@components/BlockContent';
import Photo from '@components/Photo';

type ModalProps = {
  feature: Feature;
};

const Modal = ({ feature }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div
        onClick={openModal}
        className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer transition duration-150 ease-in-out transform hover:scale-105 hover:-translate-y-6"
      >
        <div className="flex-shrink-0">
          <>
            {feature.photos?.desktopPhoto && (
              <Photo
                photo={feature.photos.desktopPhoto}
                width={600}
                srcSizes={[800, 1000, 1200, 1600]}
                sizes="100vw"
                layout="contain"
                className="hidden sm:block"
              />
            )}
            {feature.photos?.mobilePhoto && (
              <Photo
                photo={feature.photos.mobilePhoto}
                width={800}
                sizes="100vw"
                layout="contain"
                className="sm:hidden"
              />
            )}
          </>
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a className="hover:underline">Verkkosivu</a>
            </p>
            <div className="flex flex-col mt-2">
              <a className="text-xl font-semibold text-gray-900">
                {feature.title}
              </a>
              <a className="mt-3 text-base text-gray-500">
                <BlockContent blocks={feature.body} />
              </a>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="">
              {feature.labels.map((label, i) => (
                <Label key={i} label={label}></Label>
              ))}
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
              <div className="inline-block w-full max-w-7xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {feature.title}
                </Dialog.Title>
                <div className="mt-2">
                  <>
                    {feature.photos?.desktopPhoto && (
                      <Photo
                        photo={feature.photos.desktopPhoto}
                        width={1600}
                        srcSizes={[800, 1000, 1200, 1600]}
                        sizes="100vw"
                        layout="contain"
                        className="hidden sm:block"
                      />
                    )}
                    {feature.photos?.mobilePhoto && (
                      <Photo
                        photo={feature.photos.mobilePhoto}
                        width={800}
                        sizes="100vw"
                        layout="contain"
                        className="sm:hidden"
                      />
                    )}
                  </>
                </div>
                <div className="mt-2">
                  {/* <p className="text-sm text-gray-500">{feature.body}</p> */}
                  <BlockContent blocks={feature.body} />
                  {feature.labels.map((label, i) => (
                    <Label key={i} label={label}></Label>
                  ))}
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

export interface Props {
  label: Label;
}

export function Label({ label }: Props) {
  return (
    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
      {label.title}
    </span>
  );
}
