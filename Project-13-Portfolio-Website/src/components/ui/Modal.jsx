import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Computer } from "lucide-react";

export default function Modal({ open }) {
  const [dialogOpen, setDialogOpen] = useState(open);
  useEffect(() => {
    setDialogOpen(open);
  }, [open]);

  return (
    <Dialog
      open={dialogOpen}
      onClose={() => setDialogOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm transition-opacity"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 text-left shadow-xl transition-all"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 rounded-t-lg">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                  <Computer className="h-6 w-6 text-blue-600" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Professional Skills
                  </DialogTitle>
                  <div className="mt-2">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h4 className="text-lg font-semibold text-primary">
                          Master of Version Control
                        </h4>
                        <p className="text-sm text-gray-600">
                          Efficient with Git and GitHub, adept at branching,
                          merging, and pull requests.
                        </p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h4 className="text-lg font-semibold text-primary">
                          Database Dynamo
                        </h4>
                        <p className="text-sm text-gray-600">
                          Skilled in MySQL and MongoDB, with a knack for
                          optimization and management.
                        </p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h4 className="text-lg font-semibold text-primary">
                          DevOps Guru
                        </h4>
                        <p className="text-sm text-gray-600">
                          Proficient in CI/CD pipelines, Docker, Kubernetes, and
                          cloud services like AWS and Azure.
                        </p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h4 className="text-lg font-semibold text-primary">
                          Problem-Solving Wizard
                        </h4>
                        <p className="text-sm text-gray-600">
                          Thrives on tackling challenges and optimizing systems
                          with innovative solutions.
                        </p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h4 className="text-lg font-semibold text-primary">
                          Soft Skills Sorcerer
                        </h4>
                        <p className="text-sm text-gray-600">
                          Exceptional in communication, teamwork, and project
                          management, ensuring smooth project execution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex justify-center w-full sm:px-6 rounded-b-lg">
              <button
                type="button"
                onClick={() => setDialogOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 sm:ml-3 sm:w-auto"
              >
                Ok, continue exploring
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
