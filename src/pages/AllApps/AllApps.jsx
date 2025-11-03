import React, { useState } from 'react';
import { useLoaderData} from 'react-router';
import SingleApp from '../Home/SingleApp';

const AllApps = () => {
    const data = useLoaderData();
    const [search, setSearch] = useState("");
    

    const filteredApps = data.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );

    

    return (
        <div>
            {/* Header */}
            <div className="py-16">
                <h2 className="text-4xl font-bold text-center text-primary flex justify-center gap-3">
                    Our All Applications
                </h2>
                <p className="text-center text-gray-400">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            {/* Apps Count + Search */}
            <div className="w-11/12 mx-auto flex flex-col-reverse lg:flex-row gap-5 items-start justify-between lg:items-end my-10 sticky">
                <h2 className="text-lg underline font-bold">{`(${filteredApps.length})`} Apps Found</h2>

                <label className="input max-w-[300px] w-[300px] input-secondary">
                    <input
                        type="search"
                        placeholder="Search Apps"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full"
                        required
                    />
                </label>
            </div>

            {/* Apps Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 mb-10">
                {filteredApps.length > 0 ? (
                    filteredApps.map((singleApp) => (
                        <SingleApp key={singleApp.id} singleApp={singleApp} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-red-500 font-bold py-10">
                        No App Found
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllApps;
