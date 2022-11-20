import React from 'react';
import { Card } from '../../shared/Card';

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
                    <Card content='Page Count' />
                </div>
                <div className='md:col-span-2 col-span-4'>
                    <Card content='Genre Break Down' />
                </div>
                <div className='md:col-span-2 col-span-4'>
                    <Card content='Author Break Down' />
                </div>
                <div className='md:col-span-1 col-span-4'>
                    <Card content='Add Books Prompt' />
                </div>
                <div className='md:col-span-1 col-span-4'>
                    <Card content='Add TBR Prompt' />
                </div>
                <div className='md:col-span-1 col-span-4'>
                    <Card content='Add Friends Prompt' />
                </div>
                <div className='md:col-span-1 col-span-4'>
                    <Card content='check out Poems' />
                </div>
            </div>
        </>
    )
}

export default Home;