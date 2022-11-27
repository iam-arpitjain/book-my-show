import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Component
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
// layoutHOC
import DefaultLayoutHOC from '../layoutHOC/Default.layout';

const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premiereMovies, setPremiereMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=82b103a0727e6f515312b18b827fc637');

            setRecommendedMovies(getTopRatedMovies.data.results);
        };

        requestTopRatedMovies();
    }, []);

    return (
        <>
            <HeroCarousel />
            <div className='container mx-auto px-4 md:px-12 my-8'>
                <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>
                    The best of Entertainment
                </h1>
                <EntertainmentCardSlider />
            </div>

            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider title='Recommended Movies' subtitle='List of recommended movies' posters={recommendedMovies} isDark={false} />
            </div>

            <div className='bg-premiere-800 py-12'>
                <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                    <div className='hidden md:flex'>
                        <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png' alt='Rupay' className='w-full h-full' />
                    </div>
                    <PosterSlider title='Premieres' subtitle='Brand new releases every friday' posters={premiereMovies} isDark={true} />
                </div>
            </div>
            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider title='Online Streaming Events' subtitle='List of recommended movies' posters={onlineStreamEvents} isDark={false} />
            </div>
        </>
    )
};

export default DefaultLayoutHOC(HomePage);