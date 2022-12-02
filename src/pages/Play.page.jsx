import React from 'react';
import DefaultLayoutHOC from '../layoutHOC/Default.layout';

//components
import Poster from '../components/Poster/Poster.component';
import PlayFilter from '../components/PlayFilter/PlayFilter.component';

const PlayPage = () => {
    return (
        <>
            <div className='container mx-auto px-10 my-10'>
                <div className='w-full flex flex-col-reverse lg:flex-row-reverse gap-4'>
                    <div className='lg:w-3/4 p-4 bg-white rounded'>
                        <h2 className='text-2xl font-bold mb-4'>Plays in NCR Delhi</h2>
                        <div className='flex flex-wrap'>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00341591-bffmcpeaax-portrait.jpg'
                                    title='KING - India Tour Delhi'
                                    subtitle='Music Shows | English, Hindi | 18yrs + | 5hrs'
                                    eventLink='https://in.bookmyshow.com/events/king-india-tour-delhi/ET00341591'
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzIERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323655-kpcahcndmt-portrait.jpg'
                                    title='Manik`s Day Out'
                                    subtitle='Comedy Shows | Hindi | 16yrs + | 1hr 30mins'
                                    eventLink='https://in.bookmyshow.com/events/maniks-day-out/ET00323655'
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00344782-nshnaqjvlu-portrait.jpg'
                                    title='Badshah Paagal India Tour - Gurugram'
                                    subtitle='Bollywood, Punjabi | Hindi | 16yrs + | 5hrs'
                                    eventLink='https://in.bookmyshow.com/events/badshah-paagal-india-tour-gurugram/ET00344782'
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA5IERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337511-ghwnufsaau-portrait.jpg'
                                    title='Comic Con India - Delhi 2022'
                                    subtitle='Comics | English | All age groups | 9hrs'
                                    eventLink='https://in.bookmyshow.com/events/comic-con-india-delhi-2022/ET00337511'
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00345582-geuqckpbnb-portrait.jpg'
                                    title='Hamleys Polar Express'
                                    subtitle='Entertainment | English, Hindi | 20mins'
                                    eventLink='https://in.bookmyshow.com/events/hamleys-polar-express/ET00345582'
                                />
                            </div>
                            <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                                <Poster
                                    isPlay={true}
                                    src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00344281-mllybldtwd-portrait.jpg'
                                    title='The Great Indian Sneaker Festival'
                                    subtitle='Hip Hop, Rap | English, Hindi | 12yrs + | 8hrs'
                                    eventLink='https://in.bookmyshow.com/events/the-great-indian-sneaker-festival/ET00344281'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-1/4 p-4 bg-white rounded'>
                        <h2 className='text-2xl font-bold mb-4'>Filters</h2>
                        <div>
                            <PlayFilter title='Date' tags={['Today', 'Tomorrow', 'This Weekend']} />
                        </div>
                        <div>
                            <PlayFilter title='Language' tags={['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada', 'Marathi']} />
                        </div>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28051.004580899997!2d77.10656!3d28.498346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x118864015f74f74!2zMjjCsDI5JzU0LjEiTiA3N8KwMDYnMjMuNiJF!5e0!3m2!1sen!2sus!4v1669974403372!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title='Play Location'
                >
                </iframe>
            </div>
        </>
    )
};

export default DefaultLayoutHOC(PlayPage);