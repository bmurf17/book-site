import React from 'react';

function Home() {
    return (
        <>
            <div className="grid md:grid-cols-4 gap-4 w-full">
                <div className='col-span-4 text-center'>
                    <div className="text-">
                        Welcome User Name
                    </div>
                </div>
                {/* Page Count */}
                <div className='md:col-span-4 col-span-4'>
                    <div className="rounded overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-4">
                            Page Count
                        </div>
                    </div>
                </div>
                <div className='md:col-span-2 col-span-4'>
                    <div className="rounded overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-4">
                            Genre Break Down
                        </div>
                    </div>
                </div>
                <div className='md:col-span-2 col-span-4'>
                    <div className="rounded overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-4">
                            Author Break Down
                        </div>
                    </div>
                </div>
                <div className='md:col-span-1 col-span-4'>
                    <div className="rounded overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-4">
                            Add Books Prompt
                        </div>
                    </div>
                </div>
                <div className='md:col-span-1 col-span-4'>
                    <div className="rounded overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-4">
                            Add TBR Prompt
                        </div>
                    </div>
                </div>
                <div className='md:col-span-1 col-span-4'>
                    <div className="rounded overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-4">
                            Add Friends Prompt
                        </div>
                    </div>
                </div>
                <div className='md:col-span-1 col-span-4'>
                    <div className="rounded overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-4">
                            Check out poems
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;