import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://images.unsplash.com/photo-1507691640734-887fa7be3377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                title="Exhilirating Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://images.unsplash.com/photo-1516622236816-1dca819b5db8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
             <Card
                src="https://images.unsplash.com/photo-1600417144323-4b616efd9bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                title="Beautiful Locations"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
    
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://images.unsplash.com/photo-1560448205-d82bf18b9bcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://images.unsplash.com/photo-1542928658-22251e208ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
             <Card
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                title="Entire House"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£150/night"
            />
            </div>

        </div>
    )
}

export default Home