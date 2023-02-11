import React from 'react'
import styled from 'styled-components'


import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            title = "Model S"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "url('/images/model-s.jpg')"
            leftBtn = "Custom Order"
            rightBtn = "Existing Inventory"
        />
        <Section
            title = "Model Y"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "url('/images/model-y.jpg')"
            leftBtn = "Custom Order"
            rightBtn = "Existing Inventory"
        />
        <Section
            title = "Model X"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "url('/images/model-x.jpg')"
            leftBtn = "Custom Order"
            rightBtn = "Existing Inventory"
        />
        <Section
            title = "Model 3"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "url('/images/model-3.jpg')"
            leftBtn = "Custom Order"
            rightBtn = "Existing Inventory"
        />
        <Section
            title = "Solar Panels"
            description = "Lowest Cost Solar Panels in America"
            backgroundImg = "url('/images/solar-panel.jpg')"
            leftBtn = "Order Now"
            rightBtn = "Learn More"
        />
        <Section
            title = "Solar Roof"
            description = "Produce Clean Energy From Your Roof"
            backgroundImg = "url('/images/solar-roof.jpg')"
            leftBtn = "Order Now"
            rightBtn = "Learn More"
        />
        <Section
            title = "Accessories"
            description = ""
            backgroundImg = "url('/images/accessories.jpg')"
            leftBtn = "Shop Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 110vh;  
`