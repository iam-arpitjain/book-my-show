import React, { useState } from 'react';
import HeroSlider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrows.component';

const HeroCarousel = () => {
    const [images, setImages] = useState([
        {
            "adult": false,
            "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
            "genre_ids": [
                28,
                14,
                878
            ],
            "id": 436270,
            "original_language": "en",
            "original_title": "Black Adam",
            "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
            "popularity": 15075.276,
            "poster_path": "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
            "release_date": "2022-10-19",
            "title": "Black Adam",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 1888
        },
        {
            "adult": false,
            "backdrop_path": "/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
            "genre_ids": [
                14,
                28,
                35,
                80
            ],
            "id": 1013860,
            "original_language": "en",
            "original_title": "R.I.P.D. 2: Rise of the Damned",
            "overview": "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
            "popularity": 6040.388,
            "poster_path": "/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
            "release_date": "2022-11-15",
            "title": "R.I.P.D. 2: Rise of the Damned",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 152
        },
        {
            "adult": false,
            "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
            "genre_ids": [
                28,
                12,
                878
            ],
            "id": 505642,
            "original_language": "en",
            "original_title": "Black Panther: Wakanda Forever",
            "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
            "popularity": 2506.822,
            "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
            "release_date": "2022-11-09",
            "title": "Black Panther: Wakanda Forever",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 1017
        },
        {
            "adult": false,
            "backdrop_path": "/olPXihyFeeNvnaD6IOBltgIV1FU.jpg",
            "genre_ids": [
                27,
                9648,
                53
            ],
            "id": 882598,
            "original_language": "en",
            "original_title": "Smile",
            "overview": "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
            "popularity": 2103.388,
            "poster_path": "/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg",
            "release_date": "2022-09-23",
            "title": "Smile",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 893
        },
        {
            "adult": false,
            "backdrop_path": "/au4HUSWDRadIcl9CqySlw1kJMfo.jpg",
            "genre_ids": [
                80,
                28,
                53
            ],
            "id": 829799,
            "original_language": "en",
            "original_title": "Paradise City",
            "overview": "Renegade bounty hunter Ryan Swan must carve his way through the Hawaiian crime world to wreak vengeance on the kingpin who murdered his father.",
            "popularity": 2757.329,
            "poster_path": "/xdmmd437QdjcCls8yCQxrH5YYM4.jpg",
            "release_date": "2022-11-11",
            "title": "Paradise City",
            "video": false,
            "vote_average": 5.3,
            "vote_count": 17
        },
        {
            "adult": false,
            "backdrop_path": "/aQOWnw3HydsCQZ10O0wvxFOaWc3.jpg",
            "genre_ids": [
                36,
                28,
                18
            ],
            "id": 551271,
            "original_language": "en",
            "original_title": "Medieval",
            "overview": "The story of 14th century Czech icon and warlord Jan Zizka who defeated armies of the Teutonic Order and the Holy Roman Empire.",
            "popularity": 2489.705,
            "poster_path": "/4njdAkiBdC5LnFApeXSkFQ78GdT.jpg",
            "release_date": "2022-09-08",
            "title": "Medieval",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 179
        },
        {
            "adult": false,
            "backdrop_path": "/gVecEIEZLZg3pV5CACXAB48I6au.jpg",
            "genre_ids": [
                80,
                18,
                9648,
                53
            ],
            "id": 862965,
            "original_language": "en",
            "original_title": "Emily the Criminal",
            "overview": "Emily, who is saddled with student debt and locked out of the job market due to a minor criminal record, gets involved in a credit card scam that pulls her into the criminal underworld of Los Angeles, ultimately leading to deadly consequences.",
            "popularity": 1989.767,
            "poster_path": "/iZvzMpREGiqDQ5eYbx8z70qPgst.jpg",
            "release_date": "2022-08-12",
            "title": "Emily the Criminal",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 200
        },
        {
            "adult": false,
            "backdrop_path": "/u9Io1hVnxb2b3T0z99aOK8sq0SN.jpg",
            "genre_ids": [
                9648,
                12,
                80
            ],
            "id": 829280,
            "original_language": "en",
            "original_title": "Enola Holmes 2",
            "overview": "Now a detective-for-hire like her infamous brother, Enola Holmes takes on her first official case to find a missing girl, as the sparks of a dangerous conspiracy ignite a mystery that requires the help of friends — and Sherlock himself — to unravel.",
            "popularity": 1589.105,
            "poster_path": "/tegBpjM5ODoYoM1NjaiHVLEA0QM.jpg",
            "release_date": "2022-11-04",
            "title": "Enola Holmes 2",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 1118
        },
        {
            "adult": false,
            "backdrop_path": "/tUBN1paMQ1tmVA5Sjy1ZjPWVsiF.jpg",
            "genre_ids": [
                12,
                16,
                35,
                10751,
                14
            ],
            "id": 676701,
            "original_language": "es",
            "original_title": "Tadeo Jones 3: La Tabla Esmeralda",
            "overview": "Tad would love for his archeologist colleagues to accept him as one of their own, but he always messes everything up. Tad accidentally destroys a sarcophagus and unleashes an ancient spell endangering the lives of his friends: Mummy, Jeff and Belzoni. With everyone against him and only helped by Sara, he sets off on an adventure that will take him from Mexico to Chicago and from Paris to Egypt, in order to put an end to the curse of the Mummy.",
            "popularity": 1349.538,
            "poster_path": "/jvIVl8zdNSOAJImw1elQEzxStMN.jpg",
            "release_date": "2022-08-24",
            "title": "Tad the Lost Explorer and the Emerald Tablet",
            "video": false,
            "vote_average": 7.9,
            "vote_count": 117
        },
        {
            "adult": false,
            "backdrop_path": "/y5Z0WesTjvn59jP6yo459eUsbli.jpg",
            "genre_ids": [
                27,
                53
            ],
            "id": 663712,
            "original_language": "en",
            "original_title": "Terrifier 2",
            "overview": "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
            "popularity": 1188.087,
            "poster_path": "/b6IRp6Pl2Fsq37r9jFhGoLtaqHm.jpg",
            "release_date": "2022-10-06",
            "title": "Terrifier 2",
            "video": false,
            "vote_average": 7,
            "vote_count": 668
        },
        {
            "adult": false,
            "backdrop_path": "/f9g3R9gq0bASip9RnK2H56dbb5j.jpg",
            "genre_ids": [
                53
            ],
            "id": 979924,
            "original_language": "en",
            "original_title": "On the Line",
            "overview": "A provocative and edgy radio host must play a dangerous game of cat and mouse with a mysterious caller who's kidnapped his family and is threatening to blow up the whole station.",
            "popularity": 1811.382,
            "poster_path": "/a14BbSHvLgzCdbDD6tAL8OBVKL1.jpg",
            "release_date": "2022-10-31",
            "title": "On the Line",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 139
        },
        {
            "adult": false,
            "backdrop_path": "/1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg",
            "genre_ids": [
                53
            ],
            "id": 985939,
            "original_language": "en",
            "original_title": "Fall",
            "overview": "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
            "popularity": 1187.426,
            "poster_path": "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
            "release_date": "2022-08-11",
            "title": "Fall",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 1789
        },
        {
            "adult": false,
            "backdrop_path": "/fMymfWwgTfXh9RkBCFuaZrdn8Of.jpg",
            "genre_ids": [
                28,
                27
            ],
            "id": 760204,
            "original_language": "vi",
            "original_title": "The Lair",
            "overview": "Royal Air Force pilot Lt. Kate Sinclair is on her final flight mission when her jet is shot down over one of the most dangerous rebel strongholds in Afghanistan. She finds refuge in an abandoned underground bunker where deadly man-made creatures known as Ravagers — half-human, half-alien, and hungry for human flesh — are awakened.",
            "popularity": 1084.915,
            "poster_path": "/ifRFLx83Xk1DcwAS3OScgI6HmWO.jpg",
            "release_date": "2022-10-28",
            "title": "The Lair",
            "video": false,
            "vote_average": 5.9,
            "vote_count": 28
        },
        {
            "adult": false,
            "backdrop_path": "/mqsPyyeDCBAghXyjbw4TfEYwljw.jpg",
            "genre_ids": [
                10752,
                18,
                28
            ],
            "id": 49046,
            "original_language": "de",
            "original_title": "Im Westen nichts Neues",
            "overview": "Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.",
            "popularity": 1187.223,
            "poster_path": "/hYqOjJ7Gh1fbqXrxlIao1g8ZehF.jpg",
            "release_date": "2022-10-07",
            "title": "All Quiet on the Western Front",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 907
        },
        {
            "adult": false,
            "backdrop_path": "/sqVxhRkPwOo6jogWZjE99V1HRE1.jpg",
            "genre_ids": [
                16,
                35,
                10751
            ],
            "id": 1037858,
            "original_language": "en",
            "original_title": "The Soccer Football Movie",
            "overview": "When mysterious green slime monsters start popping out of soccer balls, all-star athletes Zlatan Ibrahimović and Megan Rapinoe must team up with their four biggest fans to stop evil scientist \"Weird Al\" Yankovic from stealing their talent.",
            "popularity": 1471.616,
            "poster_path": "/sWoYDNPNZs5MtzPbirXV73tIHrA.jpg",
            "release_date": "2022-11-09",
            "title": "The Soccer Football Movie",
            "video": false,
            "vote_average": 7,
            "vote_count": 39
        },
        {
            "adult": false,
            "backdrop_path": "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
            "genre_ids": [
                27,
                53,
                9648
            ],
            "id": 717728,
            "original_language": "en",
            "original_title": "Jeepers Creepers: Reborn",
            "overview": "Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.",
            "popularity": 846.612,
            "poster_path": "/qVVegwPsW6n9unBtLWq1rzOutka.jpg",
            "release_date": "2022-09-15",
            "title": "Jeepers Creepers: Reborn",
            "video": false,
            "vote_average": 5.8,
            "vote_count": 492
        },
        {
            "adult": false,
            "backdrop_path": "/uBCv09woxuCZ0wAzbKx7WM9vB8T.jpg",
            "genre_ids": [
                878,
                27
            ],
            "id": 844396,
            "original_language": "en",
            "original_title": "The Friendship Game",
            "overview": "A group of teens in a small town come across a strange object that tests their loyalties to each other with increasingly destructive consequences the deeper into the game they go.",
            "popularity": 957.577,
            "poster_path": "/qXaJkaVTNMhrOylFi6xrWnBQGE8.jpg",
            "release_date": "2022-11-11",
            "title": "The Friendship Game",
            "video": false,
            "vote_average": 5.6,
            "vote_count": 5
        },
        {
            "adult": false,
            "backdrop_path": "/GFq9kYUnpRCnlbIbjPzNA96e0j.jpg",
            "genre_ids": [
                35,
                27,
                53
            ],
            "id": 593643,
            "original_language": "en",
            "original_title": "The Menu",
            "overview": "A couple travels to a coastal island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.",
            "popularity": 827.135,
            "poster_path": "/3R3dopFTwneJVPW3ubcrnoPfI05.jpg",
            "release_date": "2022-11-17",
            "title": "The Menu",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 205
        },
        {
            "adult": false,
            "backdrop_path": "/7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
            "genre_ids": [
                28,
                18,
                36
            ],
            "id": 724495,
            "original_language": "en",
            "original_title": "The Woman King",
            "overview": "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
            "popularity": 1139.123,
            "poster_path": "/438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
            "release_date": "2022-09-15",
            "title": "The Woman King",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 450
        },
        {
            "adult": false,
            "backdrop_path": "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
            "genre_ids": [
                27,
                53
            ],
            "id": 760161,
            "original_language": "en",
            "original_title": "Orphan: First Kill",
            "overview": "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
            "popularity": 644.887,
            "poster_path": "/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
            "release_date": "2022-07-27",
            "title": "Orphan: First Kill",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 1323
        }
    ]);

    const settingsLG = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
    };

    const settings = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
    };

    return (
        <>
            <div className='lg:hidden'>
                <HeroSlider {...settings}>
                    {
                        images.map((image, index) => (
                            <div className='w-full h-full md:h-80 py-3' key={index}>
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt='Hero Banner' className='w-full h-full rounded-md object-center' />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
            <div className='hidden lg:block'>
                <HeroSlider {...settingsLG}>
                    {
                        images.map((image, index) => (
                            <div className='w-full h-96 px-2 py-3' key={index}>
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt='Hero Banner' className='w-full h-full rounded-md object-center' />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
        </>
    )
};

export default HeroCarousel;