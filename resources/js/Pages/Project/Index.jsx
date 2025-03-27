import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ projects }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Projects
                </h2>
            }
        >
            <Head title="Projects" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2">Id</th>
                                        <th className="px-3 py-2">Image</th>
                                        <th className="px-3 py-2">Name</th>
                                        <th className="px-3 py-2">Status</th>
                                        <th className="px-3 py-2">
                                            Create Dtae
                                        </th>
                                        <th className="px-3 py-2">Due Date</th>
                                        <th className="px-3 py-2">Create By</th>
                                        <th className="px-3 py-2 text-right">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {projects.data.map((project) => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-3 py-3">
                                                {project.id}
                                            </td>
                                            <td className="px-3 py-3">
                                                <img
                                                    src={project.image_path}
                                                    alt=""
                                                    style={{ width: 60 }}
                                                />
                                            </td>
                                            <td className="px-3 py-3">
                                                {project.name}
                                            </td>
                                            <td className="px-3 py-3">
                                                {project.status}
                                            </td>
                                            <td className="px-3 py-3">
                                                {project.created_at}
                                            </td>
                                            <td className="px-3 py-3">
                                                {project.due_date}
                                            </td>
                                            <td className="px-3 py-3">
                                                {project.created_by.name}
                                            </td>
                                            <td className="px-3 py-3">
                                                <Link
                                                    href={route(
                                                        "projects.edit",
                                                        project.id
                                                    )}
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "projects.destroy",
                                                        project.id
                                                    )}
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                                >
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination links={projects.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
