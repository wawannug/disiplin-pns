import React from 'react'
import HeroTitle from '../components/HeroTitle'
import PokokBahasan from '../components/PokokBahasan'
import Peraturan from '../components/Peraturan'
import KomponenArtikel from '../components/KomponenArtikel'
import ChatBotHelper from './ChatbotHelper'
import VideoPanduan from '../components/VideoPanduan'
import SitusLain from '../components/SitusLain'

const Home = () => {
    return (
        <div>
            <HeroTitle />
            <PokokBahasan />
            <Peraturan />
            <KomponenArtikel />
            <VideoPanduan />
            <SitusLain />
            <ChatBotHelper />
        </div>
    )
}

export default Home
