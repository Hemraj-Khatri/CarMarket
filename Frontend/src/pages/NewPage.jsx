const cars = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300x200',
    title: '2024 Tesla Model S',
    description: 'The latest Tesla Model S with advanced features and high performance.',
    price: '$89,990',
    rating: 4.8,
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300x200',
    title: '2024 Ford Mustang',
    description: 'The new Ford Mustang with a powerful engine and stylish design.',
    price: '$43,995',
    rating: 4.5,
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300x200',
    title: '2024 BMW 3 Series',
    description: 'The BMW 3 Series with luxury features and a smooth driving experience.',
    price: '$41,450',
    rating: 4.7,
  },
];

function Newpage() {
  return (
    <div className='bg-gray-100 min-h-screen py-10'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-semibold text-center mb-8'>Recent Car Uploads</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {cars.map((car) => (
            <div key={car.id} className='bg-white rounded-lg shadow-lg overflow-hidden'>
              <img src={car.image} alt={car.title} className='w-full h-40 object-cover' />
              <div className='p-6'>
                <h2 className='text-xl font-bold mb-2'>{car.title}</h2>
                <p className='text-gray-600 mb-2'>{car.description}</p>
                <p className='text-green-600 font-semibold'>{car.price}</p>
                <p className='text-yellow-500'>{'⭐'.repeat(Math.round(car.rating))}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Newpage;
