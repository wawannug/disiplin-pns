import React from 'react'
import HeroTitle from '../components/HeroTitle'
import PokokBahasan from '../components/PokokBahasan'
import Peraturan from '../components/Peraturan'
import KomponenArtikel from '../components/KomponenArtikel'
import ChatBotHelper from './ChatbotHelper'
import VideoPanduan from '../components/VideoPanduan'

const Home = () => {
    return (
        <div>
            <HeroTitle />
            <PokokBahasan />
            <Peraturan />
            <KomponenArtikel />
            <VideoPanduan />
            <ChatBotHelper />
        </div>
    )
}

export default Home
