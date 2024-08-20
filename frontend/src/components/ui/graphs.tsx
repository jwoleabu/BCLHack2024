import React from 'react';

interface Props {
    onContinue: () => void;
}

const Graphs: React.FC<Props> = ({ onContinue }) => {
    return (
        <div className="flex flex-col items-center bg-gray-900 text-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-6">Graphs</h1>
            <p className="text-lg mb-10">Here are some graphs about your local area.</p>
            
            <div className="flex flex-col items-center mb-8">
                <img className="object-cover max-w-full h-auto mb-4 rounded-lg shadow-md" src="https://media.discordapp.net/attachments/1251519709849976958/1251831105850441758/unemployment.png?ex=66700211&is=666eb091&hm=96bd494bd0699a4ffc9ae523fabfcb6d7642481344be04b1c62e8737b34cd445&=&format=webp&quality=lossless&width=702&height=593" alt="Unemployment Graph" />
                <p className="text-center text-gray-300">The graph titled "Modelled unemployment rate (16+) - Wandsworth" depicts the percentage of unemployed individuals aged 16 and above from 2004 to 2023, comparing data from Wandsworth to nationwide figures. The green dashed line with square markers represents the unemployment rate in Wandsworth, while the red solid line with diamond markers represents the nationwide unemployment rate.</p>
            </div>
            
            <div className="flex flex-col items-center mb-8">
                <img className="object-cover max-w-full h-auto mb-4 rounded-lg shadow-md" src="https://media.discordapp.net/attachments/1251519709849976958/1251829147152552038/Life_satisfaction.png?ex=6670003e&is=666eaebe&hm=fa0a0e8b57d80c60fe4717f9bce41612bbd8f2436a4828c4a7c65c21b4bc5b06&=&format=webp&quality=lossless&width=692&height=568" alt="Life Satisfaction Graph" />
                <p className="text-center text-gray-300">The bar graph titled "Mean Life Satisfaction: Wandsworth vs Nationwide" compares the mean life satisfaction scores between Wandsworth and the nationwide average. The green bar represents Wandsworth, with a mean life satisfaction score of 7.45. The red bar represents the nationwide average, with a slightly higher mean life satisfaction score of 7.49. Both regions exhibit high life satisfaction scores, with Wandsworth closely trailing the national average by a marginal difference of 0.04. This comparison indicates that life satisfaction in Wandsworth is nearly on par with the overall national sentiment.</p>
            </div>
            
            <div className="flex flex-col items-center mb-8">
                <img className="object-cover max-w-full h-auto mb-4 rounded-lg shadow-md" src="https://media.discordapp.net/attachments/1251519709849976958/1251829147454668851/Net_housing_stock.png?ex=6670003e&is=666eaebe&hm=39e8796feceff822ae9e9e8464e05a91d1c9f3922c01dc520eaab2aace44fc2e&=&format=webp&quality=lossless&width=707&height=568" alt="Housing Stock Graph" />
                <p className="text-center text-gray-300">The bar graph titled "Net additions of housing (000's): Wandsworth vs Nationwide" compares the mean housing stock additions between Wandsworth and the nationwide average. The green bar represents Wandsworth, with a mean housing stock addition of 14,000 units. The red bar represents the nationwide average, with a mean housing stock addition of 9,630 units. This comparison highlights that Wandsworth has significantly higher net additions of housing compared to the national average, indicating a more robust increase in housing stock in Wandsworth.</p>
            </div>
            
            <div className="flex flex-col items-center mb-8">
                <img className="object-cover max-w-full h-auto mb-4 rounded-lg shadow-md" src="https://media.discordapp.net/attachments/1251519709849976958/1251829147756662914/Travel_time_by_car.png?ex=6670003e&is=666eaebe&hm=7098c8505ff580c44082600e2c433064cd360464adcf8f0109e8e42521ac9868&=&format=webp&quality=lossless&width=702&height=568" alt="Travel Time Graph" />
                <p className="text-center text-gray-300">The provided bar graph presents a comparative analysis of car travel times between Wandsworth and Nationwide. The graph delineates that the travel time within Wandsworth is approximately 6.25 hours, whereas the Nationwide travel time is significantly longer, at 12.34 hours. This visual data suggests that traveling nationwide requires nearly double the amount of time compared to traversing within Wandsworth.</p>
            </div>
            
            <button
                className="mt-8 bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105"
                onClick={onContinue}
            >
                Continue
            </button>
        </div>
    );
}

export default Graphs;
