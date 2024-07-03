// slidesData.js
import projImages1 from '../../Images/proj0.jpg';
import projImages2 from '../../Images/proj1.jpg';
import projImages3 from '../../Images/proj2.jpg';
import projImages4 from '../../Images/proj3.jpg';
import projImages5 from '../../Images/proj4.jpg';
import projImages6 from '../../Images/proj5.jpg';

const getSlidesData = ( languageData) => [
    {
        src: projImages2,
        title: languageData['projects titles'][0],
        description: languageData['projects texts'][0],
    },
    {
        src: projImages3,
        title: languageData['projects titles'][1],
        description: languageData['projects texts'][1],
    },
    {
        src: projImages4,
        title: languageData['projects titles'][2],
        description: languageData['projects texts'][2],
    },
    {
        src: projImages5,
        title: languageData['projects titles'][3],
        description: languageData['projects texts'][3],
    },
    {
        src: projImages6,
        title: languageData['projects titles'][4],
        description: languageData['projects texts'][4],
    },
    {
        src: projImages1,
        title: languageData['projects titles'][5],
        description: languageData['projects texts'][5],
    },
];

export default getSlidesData;
