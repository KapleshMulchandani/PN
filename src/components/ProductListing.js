import React from 'react';
import PlantCard from './PlantCard';

const plantData = [
    {
        category: "Aromatic Plants",
        plants: [
            { id: 1, name: 'Basil', description: 'An aromatic herb.', cost: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-NApccOqyosFnQFT3PYJSuijPmk03jbZiw&s' },
            { id: 2, name: 'Mint', description: 'Refreshing aroma.', cost: 4, image: 'https://theaffordableorganicstore.com/wp-content/uploads/2021/06/1713181721.jpg' },
        ]
    },
    {
        category: "Medicinal Plants",
        plants: [
            { id: 3, name: 'Aloe Vera', description: 'A soothing medicinal plant.', cost: 10, image: 'https://www.lotusherbals.com/cdn/shop/files/Aloe_Vera_19d03d67-a8e3-4e65-bd94-12222849c32d_600x.jpg?v=1712987991' },
            { id: 4, name: 'Lavender', description: 'Known for its healing properties.', cost: 12, image: 'https://www.allthatgrows.in/cdn/shop/products/Lavender-1_0.jpg?v=1598076770' },
        ]
    },
    {
        category: "Air Purifying Plants",
        plants: [
            { id: 5, name: 'Snake Plant', description: 'Great for improving air quality.', cost: 15, image: 'https://m.media-amazon.com/images/I/61LjnhXXWIL._AC_UF1000,1000_QL80_.jpg' },
            { id: 6, name: 'Peace Lily', description: 'Beautiful and purifies air.', cost: 20, image: 'https://cdn.mos.cms.futurecdn.net/qYNPupRnspGWPF4886Z7hB.jpg' },
        ]
    },
];

const ProductListing = () => {
    return (
        <div className="product-listing">
            {plantData.map(category => (
                <div key={category.category}>
                    <h2>{category.category}</h2>
                    <div className="plant-card-container">
                        {category.plants.map(plant => (
                            <PlantCard key={plant.id} plant={plant} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductListing;